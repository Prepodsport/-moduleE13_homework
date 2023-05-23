// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line no-undef
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// eslint-disable-next-line no-undef
const ESLintPlugin = require("eslint-webpack-plugin");
// eslint-disable-next-line no-undef
const StylelintPlugin = require("stylelint-webpack-plugin");
// eslint-disable-next-line no-undef
const TerserJSPlugin = require("terser-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        open: true,
        hot: true,
    },
    output: {
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, "./dist"),
        filename: "exit.js"
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                },
                "css-loader"],
            }
        ]
    },
    plugins: [
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin(),
        new ESLintPlugin(),
        new TerserJSPlugin(),
        new StylelintPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()]
    },
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    }
};