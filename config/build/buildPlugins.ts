import { Configuration, } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from "webpack";
import { BuildOptions } from './types/types'
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCHeckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import path from "path";


export function buildPLugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: options.path.html }),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
        plugins.push(
            new ForkTsCHeckerWebpackPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }));
    };

    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    };

    return plugins;
}