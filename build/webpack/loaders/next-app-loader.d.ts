import type webpack from 'webpack';
import type { ValueOf } from '../../../shared/lib/constants';
export declare const FILE_TYPES: {
    readonly layout: "layout";
    readonly template: "template";
    readonly error: "error";
    readonly loading: "loading";
    readonly head: "head";
    readonly 'not-found': "not-found";
};
declare type ComponentModule = () => any;
export declare type ComponentsType = {
    readonly [componentKey in ValueOf<typeof FILE_TYPES>]?: ComponentModule;
} & {
    readonly layoutOrPagePath?: string;
    readonly page?: ComponentModule;
};
declare const nextAppLoader: webpack.LoaderDefinitionFunction<{
    name: string;
    pagePath: string;
    appDir: string;
    appPaths: string[] | null;
    pageExtensions: string[];
    rootDir?: string;
    tsconfigPath?: string;
    isDev?: boolean;
}>;
export default nextAppLoader;
