const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const {merge}=require("webpack-merge");
const common = require("./webpack.common");


const prod = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].[contenthash].js",
    clean:true,
    assetModuleFilename: "img/[hash][ext]"
  },
};

module.exports = merge(common,prod);