const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dev = {
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*.html", "src/**/*.scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: false,
  },
};

module.exports = merge(common, dev);
