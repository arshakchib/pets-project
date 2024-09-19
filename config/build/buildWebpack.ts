import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoader } from './buildLoaders'
import { buildPLugins } from "./buildPlugins";
import { buildResolver } from "./buildResolver";
import { BuildOptions } from "./types/types";


export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, path } = options;
    const isDev = mode === "development";
    return {
        mode: mode ?? "development",
        entry: path.entry,
        output: {
            path: path.output,
            publicPath: "/",
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: buildPLugins(options),
        module: {
            rules: buildLoader(options)
        },
        resolve: buildResolver(options),

        devtool: isDev ? "inline-source-map" : 'source-map',

        devServer: isDev ? buildDevServer(options) : undefined
    };
};