import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types'
import { BuildBabelLoader } from './babel/BuildBabelLoader'


export function buildLoader(options: BuildOptions): ModuleOptions["rules"] {
    const isDev = options.mode === 'development';

    const cssLoaderModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        },
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderModules,
            "sass-loader",
        ],
    };

    const babelLoader = BuildBabelLoader(options);

    return [
        scssLoader,
        babelLoader,
    ];
};