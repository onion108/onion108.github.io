const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/static"
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        static: './dist',
    },
    // optimization: {
    //     runtimeChunk: 'single'
    // }
};
