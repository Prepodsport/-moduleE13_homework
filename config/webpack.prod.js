// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-undef
const TerserWebpackPlugin = require("terser-webpack-plugin");
// eslint-disable-next-line no-undef
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
    mode: "production",
    entry:  "./src/index.js",
    output: {
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, "../dist"),
        filename: "exit.js",
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        }),
        new CssMinimizerPlugin(),
        new TerserWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {pretty: true}
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin() , new TerserWebpackPlugin({})],
    },
};