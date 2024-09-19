import { BuildOptions } from "../types/types";

export const BuildBabelLoader = (options: BuildOptions) => {
    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    [
                        '@babel/preset-react',
                        {
                            runtime: options.mode === "development" ? "automatic" : "classic"
                        }
                    ]
                ],
            },
        },
    }
};