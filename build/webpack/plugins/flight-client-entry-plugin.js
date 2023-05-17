"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edgeServerModuleIds = exports.serverModuleIds = exports.injectedClientEntries = void 0;
var _querystring = require("querystring");
var _path = _interopRequireDefault(require("path"));
var _webpack = require("next/dist/compiled/webpack/webpack");
var _onDemandEntryHandler = require("../../../server/dev/on-demand-entry-handler");
var _constants = require("../../../lib/constants");
var _constants1 = require("../../../shared/lib/constants");
var _flightManifestPlugin = require("./flight-manifest-plugin");
var _utils = require("../loaders/utils");
var _utils1 = require("../utils");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const PLUGIN_NAME = "ClientEntryPlugin";
const injectedClientEntries = new Map();
exports.injectedClientEntries = injectedClientEntries;
const serverModuleIds = new Map();
exports.serverModuleIds = serverModuleIds;
const edgeServerModuleIds = new Map();
exports.edgeServerModuleIds = edgeServerModuleIds;
// TODO-APP: move CSS manifest generation to the flight manifest plugin.
const flightCSSManifest = {};
class FlightClientEntryPlugin {
    constructor(options){
        this.dev = options.dev;
        this.isEdgeServer = options.isEdgeServer;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation, { normalModuleFactory  })=>{
            compilation.dependencyFactories.set(_webpack.webpack.dependencies.ModuleDependency, normalModuleFactory);
            compilation.dependencyTemplates.set(_webpack.webpack.dependencies.ModuleDependency, new _webpack.webpack.dependencies.NullDependency.Template());
        });
        compiler.hooks.finishMake.tapPromise(PLUGIN_NAME, (compilation)=>{
            return this.createClientEntries(compiler, compilation);
        });
        compiler.hooks.afterCompile.tap(PLUGIN_NAME, (compilation)=>{
            (0, _utils1).traverseModules(compilation, (mod)=>{
                // const modId = compilation.chunkGraph.getModuleId(mod) + ''
                // The module must has request, and resource so it's not a new entry created with loader.
                // Using the client layer module, which doesn't have `rsc` tag in buildInfo.
                if (mod.request && mod.resource && !mod.buildInfo.rsc) {
                    if (compilation.moduleGraph.isAsync(mod)) {
                        _flightManifestPlugin.ASYNC_CLIENT_MODULES.add(mod.resource);
                    }
                }
            });
            const recordModule = (modId, mod)=>{
                var ref, ref1, ref2;
                const modResource = ((ref = mod.resourceResolveData) == null ? void 0 : ref.path) || mod.resource;
                if (((ref1 = mod.resourceResolveData) == null ? void 0 : (ref2 = ref1.context) == null ? void 0 : ref2.issuerLayer) !== _constants.WEBPACK_LAYERS.client) {
                    return;
                }
                if (typeof modId !== "undefined" && modResource) {
                    // Note that this isn't that reliable as webpack is still possible to assign
                    // additional queries to make sure there's no conflict even using the `named`
                    // module ID strategy.
                    let ssrNamedModuleId = _path.default.relative(compiler.context, modResource);
                    if (!ssrNamedModuleId.startsWith(".")) {
                        // TODO use getModuleId instead
                        ssrNamedModuleId = `./${ssrNamedModuleId.replace(/\\/g, "/")}`;
                    }
                    if (this.isEdgeServer) {
                        edgeServerModuleIds.set(ssrNamedModuleId.replace(/\/next\/dist\/esm\//, "/next/dist/"), modId);
                    } else {
                        serverModuleIds.set(ssrNamedModuleId, modId);
                    }
                }
            };
            (0, _utils1).traverseModules(compilation, (mod, _chunk, _chunkGroup, modId)=>{
                recordModule(modId + "", mod);
            });
        });
    }
    async createClientEntries(compiler, compilation) {
        const promises = [];
        // Loop over all the entry modules.
        function forEachEntryModule(callback) {
            for (const [name, entry] of compilation.entries.entries()){
                var ref;
                // Skip for entries under pages/
                if (name.startsWith("pages/")) continue;
                // Check if the page entry is a server component or not.
                const entryDependency = (ref = entry.dependencies) == null ? void 0 : ref[0];
                // Ensure only next-app-loader entries are handled.
                if (!entryDependency || !entryDependency.request) continue;
                const request = entryDependency.request;
                if (!request.startsWith("next-edge-ssr-loader?") && !request.startsWith("next-app-loader?")) continue;
                let entryModule = compilation.moduleGraph.getResolvedModule(entryDependency);
                if (request.startsWith("next-edge-ssr-loader?")) {
                    entryModule.dependencies.forEach((dependency)=>{
                        const modRequest = dependency.request;
                        if (modRequest == null ? void 0 : modRequest.includes("next-app-loader")) {
                            entryModule = compilation.moduleGraph.getResolvedModule(dependency);
                        }
                    });
                }
                callback({
                    name,
                    entryModule
                });
            }
        }
        // For each SC server compilation entry, we need to create its corresponding
        // client component entry.
        forEachEntryModule(({ name , entryModule  })=>{
            const internalClientComponentEntryImports = new Set();
            for (const connection of compilation.moduleGraph.getOutgoingConnections(entryModule)){
                const layoutOrPageDependency = connection.dependency;
                const layoutOrPageRequest = connection.dependency.request;
                const [clientComponentImports] = this.collectClientComponentsAndCSSForDependency({
                    layoutOrPageRequest,
                    compilation,
                    dependency: layoutOrPageDependency
                });
                const isAbsoluteRequest = layoutOrPageRequest[0] === "/";
                // Next.js internals are put into a separate entry.
                if (!isAbsoluteRequest) {
                    clientComponentImports.forEach((value)=>internalClientComponentEntryImports.add(value));
                    continue;
                }
                const relativeRequest = isAbsoluteRequest ? _path.default.relative(compilation.options.context, layoutOrPageRequest) : layoutOrPageRequest;
                // Replace file suffix as `.js` will be added.
                const bundlePath = relativeRequest.replace(/\.(js|ts)x?$/, "");
                promises.push(this.injectClientEntryAndSSRModules({
                    compiler,
                    compilation,
                    entryName: name,
                    clientComponentImports,
                    bundlePath
                }));
            }
            // Create internal app
            promises.push(this.injectClientEntryAndSSRModules({
                compiler,
                compilation,
                entryName: name,
                clientComponentImports: [
                    ...internalClientComponentEntryImports
                ],
                bundlePath: "app-internals"
            }));
        });
        // After optimizing all the modules, we collect the CSS that are still used
        // by the certain chunk.
        compilation.hooks.afterOptimizeModules.tap(PLUGIN_NAME, ()=>{
            const cssImportsForChunk = {};
            function collectModule(entryName, mod) {
                const resource = mod.resource;
                const modId = resource;
                if (modId) {
                    if (_utils.regexCSS.test(modId)) {
                        cssImportsForChunk[entryName].push(modId);
                    }
                }
            }
            compilation.chunkGroups.forEach((chunkGroup)=>{
                chunkGroup.chunks.forEach((chunk)=>{
                    // Here we only track page chunks.
                    if (!chunk.name) return;
                    if (!chunk.name.endsWith("/page")) return;
                    const entryName = _path.default.join(compiler.context, chunk.name);
                    if (!cssImportsForChunk[entryName]) {
                        cssImportsForChunk[entryName] = [];
                    }
                    const chunkModules = compilation.chunkGraph.getChunkModulesIterable(chunk);
                    for (const mod of chunkModules){
                        collectModule(entryName, mod);
                        const anyModule = mod;
                        if (anyModule.modules) {
                            anyModule.modules.forEach((concatenatedMod)=>{
                                collectModule(entryName, concatenatedMod);
                            });
                        }
                    }
                    const entryCSSInfo = flightCSSManifest.__entry_css__ || {};
                    entryCSSInfo[entryName] = cssImportsForChunk[entryName];
                    Object.assign(flightCSSManifest, {
                        __entry_css__: entryCSSInfo
                    });
                });
            });
            forEachEntryModule(({ entryModule  })=>{
                for (const connection of compilation.moduleGraph.getOutgoingConnections(entryModule)){
                    const layoutOrPageDependency = connection.dependency;
                    const layoutOrPageRequest = connection.dependency.request;
                    const [, cssImports] = this.collectClientComponentsAndCSSForDependency({
                        layoutOrPageRequest,
                        compilation,
                        dependency: layoutOrPageDependency
                    });
                    Object.assign(flightCSSManifest, cssImports);
                }
            });
        });
        compilation.hooks.processAssets.tap({
            name: PLUGIN_NAME,
            // Have to be in the optimize stage to run after updating the CSS
            // asset hash via extract mini css plugin.
            stage: _webpack.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_HASH
        }, (assets)=>{
            const manifest = JSON.stringify(flightCSSManifest);
            assets[_constants1.FLIGHT_SERVER_CSS_MANIFEST + ".json"] = new _webpack.sources.RawSource(manifest);
            assets[_constants1.FLIGHT_SERVER_CSS_MANIFEST + ".js"] = new _webpack.sources.RawSource("self.__RSC_CSS_MANIFEST=" + manifest);
        });
        const res = await Promise.all(promises);
        // Invalidate in development to trigger recompilation
        const invalidator = (0, _onDemandEntryHandler).getInvalidator();
        // Check if any of the entry injections need an invalidation
        if (invalidator && res.includes(true)) {
            invalidator.invalidate([
                _constants1.COMPILER_NAMES.client
            ]);
        }
    }
    collectClientComponentsAndCSSForDependency({ layoutOrPageRequest , compilation , dependency  }) {
        /**
     * Keep track of checked modules to avoid infinite loops with recursive imports.
     */ const visitedBySegment = {};
        const clientComponentImports = [];
        const serverCSSImports = {};
        const filterClientComponents = (dependencyToFilter, inClientComponentBoundary)=>{
            var ref, ref3;
            const mod = compilation.moduleGraph.getResolvedModule(dependencyToFilter);
            if (!mod) return;
            // Keep client imports as simple
            // native or installed js module: -> raw request, e.g. next/head
            // client js or css: -> user request
            const rawRequest = mod.rawRequest;
            // Request could be undefined or ''
            if (!rawRequest) return;
            const isCSS = _utils.regexCSS.test(rawRequest);
            const isLocal = !isCSS && !rawRequest.startsWith(".") && !rawRequest.startsWith("/") && !rawRequest.startsWith(_constants.APP_DIR_ALIAS);
            const modRequest = isLocal ? rawRequest : ((ref = mod.resourceResolveData) == null ? void 0 : ref.path) + ((ref3 = mod.resourceResolveData) == null ? void 0 : ref3.query);
            // Ensure module is not walked again if it's already been visited
            if (!visitedBySegment[layoutOrPageRequest]) {
                visitedBySegment[layoutOrPageRequest] = new Set();
            }
            if (!modRequest || visitedBySegment[layoutOrPageRequest].has(modRequest)) {
                return;
            }
            visitedBySegment[layoutOrPageRequest].add(modRequest);
            const isClientComponent = (0, _utils).isClientComponentModule(mod);
            if (isCSS) {
                const sideEffectFree = mod.factoryMeta && mod.factoryMeta.sideEffectFree;
                if (sideEffectFree) {
                    const unused = !compilation.moduleGraph.getExportsInfo(mod).isModuleUsed(this.isEdgeServer ? _constants1.EDGE_RUNTIME_WEBPACK : "webpack-runtime");
                    if (unused) {
                        return;
                    }
                }
                serverCSSImports[layoutOrPageRequest] = serverCSSImports[layoutOrPageRequest] || [];
                serverCSSImports[layoutOrPageRequest].push(modRequest);
            }
            // Check if request is for css file.
            if (!inClientComponentBoundary && isClientComponent || isCSS) {
                clientComponentImports.push(modRequest);
                return;
            }
            compilation.moduleGraph.getOutgoingConnections(mod).forEach((connection)=>{
                filterClientComponents(connection.dependency, inClientComponentBoundary || isClientComponent);
            });
        };
        // Traverse the module graph to find all client components.
        filterClientComponents(dependency, false);
        return [
            clientComponentImports,
            serverCSSImports
        ];
    }
    async injectClientEntryAndSSRModules({ compiler , compilation , entryName , clientComponentImports , bundlePath  }) {
        let shouldInvalidate = false;
        const loaderOptions = {
            modules: clientComponentImports,
            server: false
        };
        // For the client entry, we always use the CJS build of Next.js. If the
        // server is using the ESM build (when using the Edge runtime), we need to
        // replace them.
        const clientLoader = `next-flight-client-entry-loader?${(0, _querystring).stringify({
            modules: this.isEdgeServer ? clientComponentImports.map((importPath)=>importPath.replace("next/dist/esm/", "next/dist/")) : clientComponentImports,
            server: false
        })}!`;
        const clientSSRLoader = `next-flight-client-entry-loader?${(0, _querystring).stringify({
            ...loaderOptions,
            server: true
        })}!`;
        // Add for the client compilation
        // Inject the entry to the client compiler.
        if (this.dev) {
            const pageKey = _constants1.COMPILER_NAMES.client + bundlePath;
            if (!_onDemandEntryHandler.entries[pageKey]) {
                _onDemandEntryHandler.entries[pageKey] = {
                    type: _onDemandEntryHandler.EntryTypes.CHILD_ENTRY,
                    parentEntries: new Set([
                        entryName
                    ]),
                    bundlePath,
                    request: clientLoader,
                    dispose: false,
                    lastActiveTime: Date.now()
                };
                shouldInvalidate = true;
            } else {
                const entryData = _onDemandEntryHandler.entries[pageKey];
                // New version of the client loader
                if (entryData.request !== clientLoader) {
                    entryData.request = clientLoader;
                    shouldInvalidate = true;
                }
                if (entryData.type === _onDemandEntryHandler.EntryTypes.CHILD_ENTRY) {
                    entryData.parentEntries.add(entryName);
                }
            }
        } else {
            injectedClientEntries.set(bundlePath, clientLoader);
        }
        // Inject the entry to the server compiler (__sc_client__).
        const clientComponentEntryDep = _webpack.webpack.EntryPlugin.createDependency(clientSSRLoader, {
            name: bundlePath
        });
        // Add the dependency to the server compiler.
        await this.addEntry(compilation, // Reuse compilation context.
        compiler.context, clientComponentEntryDep, {
            // By using the same entry name
            name: entryName,
            // Layer should be client for the SSR modules
            // This ensures the client components are bundled on client layer
            layer: _constants.WEBPACK_LAYERS.client
        });
        return shouldInvalidate;
    }
    // TODO-APP: make sure dependsOn is added for layouts/pages
    addEntry(compilation, context, entry /* Dependency */ , options /* EntryOptions */ ) /* Promise<module> */ {
        return new Promise((resolve, reject)=>{
            compilation.entries.get(options.name).includeDependencies.push(entry);
            compilation.hooks.addEntry.call(entry, options);
            compilation.addModuleTree({
                context,
                dependency: entry,
                contextInfo: {
                    issuerLayer: options.layer
                }
            }, (err, module)=>{
                if (err) {
                    compilation.hooks.failedEntry.call(entry, options, err);
                    return reject(err);
                }
                compilation.hooks.succeedEntry.call(entry, options, module);
                return resolve(module);
            });
        });
    }
}
exports.FlightClientEntryPlugin = FlightClientEntryPlugin;

//# sourceMappingURL=flight-client-entry-plugin.js.map