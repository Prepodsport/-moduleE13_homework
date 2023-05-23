// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-undef
const StylelintPlugin = require("stylelint-webpack-plugin");


// eslint-disable-next-line no-undef
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry:  "./src/index.js",
    output: {
        // eslint-disable-next-line no-undef
        path: path.join(__dirname, "../dist"),
        filename: "exit.js"
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        }),
        // eslint-disable-next-line no-undef
        new StylelintPlugin({configFile: path.join(__dirname, "../.stylelintrc.json"),}),
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
    }
};