// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        hot: true,
        port: 8080,
        open: true,
        client: {
            logging: "info",
        }
    },
    output: {
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, "./dist"),
        filename: "exit.js"
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        })
    ],
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
                "css-loader"]
            }
        ]
    }
}