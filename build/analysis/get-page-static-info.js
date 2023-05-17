"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRSCModuleType = getRSCModuleType;
exports.getPageStaticInfo = getPageStaticInfo;
var _configShared = require("../../server/config-shared");
var _extractConstValue = require("./extract-const-value");
var _parseModule = require("./parse-module");
var _fs = require("fs");
var _tryToParsePath = require("../../lib/try-to-parse-path");
var Log = _interopRequireWildcard(require("../output/log"));
var _constants = require("../../lib/constants");
var _loadCustomRoutes = require("../../lib/load-custom-routes");
var _micromatch = require("next/dist/compiled/micromatch");
var _constants1 = require("../../shared/lib/constants");
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const CLIENT_MODULE_LABEL = `/* __next_internal_client_entry_do_not_use__ */`;
function getRSCModuleType(source) {
    return source.includes(CLIENT_MODULE_LABEL) ? _constants1.RSC_MODULE_TYPES.client : _constants1.RSC_MODULE_TYPES.server;
}
/**
 * Receives a parsed AST from SWC and checks if it belongs to a module that
 * requires a runtime to be specified. Those are:
 *   - Modules with `export function getStaticProps | getServerSideProps`
 *   - Modules with `export { getStaticProps | getServerSideProps } <from ...>`
 *   - Modules with `export const runtime = ...`
 */ function checkExports(swcAST) {
    if (Array.isArray(swcAST == null ? void 0 : swcAST.body)) {
        try {
            let runtime;
            let ssr = false;
            let ssg = false;
            for (const node of swcAST.body){
                var ref11, ref1, ref2, ref3;
                if (node.type === "ExportDeclaration" && ((ref11 = node.declaration) == null ? void 0 : ref11.type) === "VariableDeclaration") {
                    var ref4, ref5;
                    const id = (ref5 = (ref4 = node.declaration) == null ? void 0 : ref4.declarations[0]) == null ? void 0 : ref5.id.value;
                    if (id === "runtime") {
                        var ref6, ref7;
                        runtime = (ref7 = (ref6 = node.declaration) == null ? void 0 : ref6.declarations[0]) == null ? void 0 : ref7.init.value;
                    }
                }
                if (node.type === "ExportDeclaration" && ((ref1 = node.declaration) == null ? void 0 : ref1.type) === "FunctionDeclaration" && [
                    "getStaticProps",
                    "getServerSideProps"
                ].includes((ref2 = node.declaration.identifier) == null ? void 0 : ref2.value)) {
                    ssg = node.declaration.identifier.value === "getStaticProps";
                    ssr = node.declaration.identifier.value === "getServerSideProps";
                }
                if (node.type === "ExportDeclaration" && ((ref3 = node.declaration) == null ? void 0 : ref3.type) === "VariableDeclaration") {
                    var ref8, ref9;
                    const id = (ref9 = (ref8 = node.declaration) == null ? void 0 : ref8.declarations[0]) == null ? void 0 : ref9.id.value;
                    if ([
                        "getStaticProps",
                        "getServerSideProps"
                    ].includes(id)) {
                        ssg = id === "getStaticProps";
                        ssr = id === "getServerSideProps";
                    }
                }
                if (node.type === "ExportNamedDeclaration") {
                    const values = node.specifiers.map((specifier)=>{
                        var ref, ref10;
                        return specifier.type === "ExportSpecifier" && ((ref = specifier.orig) == null ? void 0 : ref.type) === "Identifier" && ((ref10 = specifier.orig) == null ? void 0 : ref10.value);
                    });
                    ssg = values.some((value)=>[
                            "getStaticProps"
                        ].includes(value));
                    ssr = values.some((value)=>[
                            "getServerSideProps"
                        ].includes(value));
                }
            }
            return {
                ssr,
                ssg,
                runtime
            };
        } catch (err) {}
    }
    return {
        ssg: false,
        ssr: false
    };
}
async function tryToReadFile(filePath, shouldThrow) {
    try {
        return await _fs.promises.readFile(filePath, {
            encoding: "utf8"
        });
    } catch (error) {
        if (shouldThrow) {
            throw error;
        }
    }
}
function getMiddlewareMatchers(matcherOrMatchers, nextConfig) {
    let matchers = [];
    if (Array.isArray(matcherOrMatchers)) {
        matchers = matcherOrMatchers;
    } else {
        matchers.push(matcherOrMatchers);
    }
    const { i18n  } = nextConfig;
    let routes = matchers.map((m)=>typeof m === "string" ? {
            source: m
        } : m);
    // check before we process the routes and after to ensure
    // they are still valid
    (0, _loadCustomRoutes).checkCustomRoutes(routes, "middleware");
    routes = routes.map((r)=>{
        let { source  } = r;
        const isRoot = source === "/";
        if ((i18n == null ? void 0 : i18n.locales) && r.locale !== false) {
            source = `/:nextInternalLocale([^/.]{1,})${isRoot ? "" : source}`;
        }
        source = `/:nextData(_next/data/[^/]{1,})?${source}${isRoot ? `(${nextConfig.i18n ? "|\\.json|" : ""}/?index|/?index\\.json)?` : "(.json)?"}`;
        if (nextConfig.basePath) {
            source = `${nextConfig.basePath}${source}`;
        }
        return {
            ...r,
            source
        };
    });
    (0, _loadCustomRoutes).checkCustomRoutes(routes, "middleware");
    return routes.map((r)=>{
        const { source , ...rest } = r;
        const parsedPage = (0, _tryToParsePath).tryToParsePath(source);
        if (parsedPage.error || !parsedPage.regexStr) {
            throw new Error(`Invalid source: ${source}`);
        }
        return {
            ...rest,
            regexp: parsedPage.regexStr
        };
    });
}
function getMiddlewareConfig(pageFilePath, config, nextConfig) {
    const result = {};
    if (config.matcher) {
        result.matchers = getMiddlewareMatchers(config.matcher, nextConfig);
    }
    if (typeof config.regions === "string" || Array.isArray(config.regions)) {
        result.regions = config.regions;
    } else if (typeof config.regions !== "undefined") {
        Log.warn(`The \`regions\` config was ignored: config must be empty, a string or an array of strings. (${pageFilePath})`);
    }
    if (config.unstable_allowDynamic) {
        result.unstable_allowDynamicGlobs = Array.isArray(config.unstable_allowDynamic) ? config.unstable_allowDynamic : [
            config.unstable_allowDynamic
        ];
        for (const glob of result.unstable_allowDynamicGlobs ?? []){
            try {
                (0, _micromatch).matcher(glob);
            } catch (err) {
                throw new Error(`${pageFilePath} exported 'config.unstable_allowDynamic' contains invalid pattern '${glob}': ${err.message}`);
            }
        }
    }
    return result;
}
let warnedAboutExperimentalEdgeApiFunctions = false;
function warnAboutExperimentalEdgeApiFunctions() {
    if (warnedAboutExperimentalEdgeApiFunctions) {
        return;
    }
    Log.warn(`You are using an experimental edge runtime, the API might change.`);
    warnedAboutExperimentalEdgeApiFunctions = true;
}
const warnedUnsupportedValueMap = new Map();
function warnAboutUnsupportedValue(pageFilePath, page, error) {
    if (warnedUnsupportedValueMap.has(pageFilePath)) {
        return;
    }
    Log.warn(`Next.js can't recognize the exported \`config\` field in ` + (page ? `route "${page}"` : `"${pageFilePath}"`) + ":\n" + error.message + (error.path ? ` at "${error.path}"` : "") + ".\n" + "The default config will be used instead.\n" + "Read More - https://nextjs.org/docs/messages/invalid-page-config");
    warnedUnsupportedValueMap.set(pageFilePath, true);
}
async function getPageStaticInfo(params) {
    var ref;
    const { isDev , pageFilePath , nextConfig , page  } = params;
    const fileContent = await tryToReadFile(pageFilePath, !isDev) || "";
    if (/runtime|getStaticProps|getServerSideProps|export const config/.test(fileContent)) {
        var ref15;
        const swcAST = await (0, _parseModule).parseModule(pageFilePath, fileContent);
        const { ssg , ssr , runtime  } = checkExports(swcAST);
        const rsc = getRSCModuleType(fileContent);
        // default / failsafe value for config
        let config = {};
        try {
            config = (0, _extractConstValue).extractExportedConstValue(swcAST, "config");
        } catch (e) {
            if (e instanceof _extractConstValue.UnsupportedValueError) {
                warnAboutUnsupportedValue(pageFilePath, page, e);
            }
        // `export config` doesn't exist, or other unknown error throw by swc, silence them
        }
        // Currently, we use `export const config = { runtime: '...' }` to specify the page runtime.
        // But in the new app directory, we prefer to use `export const runtime = '...'`
        // and deprecate the old way. To prevent breaking changes for `pages`, we use the exported config
        // as the fallback value.
        let resolvedRuntime = runtime || config.runtime;
        if (typeof resolvedRuntime !== "undefined" && !(0, _configShared).isServerRuntime(resolvedRuntime)) {
            const options = Object.values(_constants.SERVER_RUNTIME).join(", ");
            if (typeof resolvedRuntime !== "string") {
                Log.error(`The \`runtime\` config must be a string. Please leave it empty or choose one of: ${options}`);
            } else {
                Log.error(`Provided runtime "${config.runtime}" is not supported. Please leave it empty or choose one of: ${options}`);
            }
            if (!isDev) {
                process.exit(1);
            }
        }
        resolvedRuntime = _constants.SERVER_RUNTIME.edge === resolvedRuntime ? _constants.SERVER_RUNTIME.edge : ssr || ssg ? resolvedRuntime || ((ref15 = nextConfig.experimental) == null ? void 0 : ref15.runtime) : undefined;
        if (resolvedRuntime === _constants.SERVER_RUNTIME.edge) {
            warnAboutExperimentalEdgeApiFunctions();
        }
        const middlewareConfig = getMiddlewareConfig(page ?? "middleware/edge API route", config, nextConfig);
        return {
            ssr,
            ssg,
            rsc,
            ...middlewareConfig && {
                middleware: middlewareConfig
            },
            ...resolvedRuntime && {
                runtime: resolvedRuntime
            }
        };
    }
    return {
        ssr: false,
        ssg: false,
        rsc: _constants1.RSC_MODULE_TYPES.server,
        runtime: (ref = nextConfig.experimental) == null ? void 0 : ref.runtime
    };
}

//# sourceMappingURL=get-page-static-info.js.map