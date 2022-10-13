const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      { test: /\.vue$/, use: ["vue-loader"] },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin("Hello, World!"),
    new htmlWebpackPlugin({
      template: "index.html",
    }),
    new uglifyjsWebpackPlugin(),
  ],
  devServer: {
    contentBase: "./dist",
    inline: true,
  },
};
