import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPath, } from "./config/build/types/types";
import path from "path";


interface EnvVariable {
    mode: BuildMode
    port: number
    analyzer: boolean;
}

export default (env: EnvVariable) => {
    const paths: BuildPath = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', "index.tsx"),
        html: path.resolve(__dirname, 'public', "index.html"),
        src: path.resolve(__dirname, "src"),
        public: path.resolve(__dirname, 'public')
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port || 3000,
        mode: env.mode || "development",
        path: paths,
        analyzer: env.analyzer,
    })
    return config;
}
