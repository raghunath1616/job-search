require("babel-polyfill")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const publicPath = "/"
const envConstants = require("./envConstants")

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    pathinfo: true,
    filename: "static/js/bundle.[hash].js",
    chunkFilename: "static/js/[name].chunk.[hash].js",
    publicPath,
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
  },
  resolve: {
    modules: ["src", "node_modules"],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        loader: "file-loader",
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      filename: "index.html",
    }),
    new webpack.DefinePlugin(envConstants),
  ],
}
