const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const {merge}=require("webpack-merge");
const common = require("./webpack.common");


const prod = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].js",
    clean:true
  },
};

module.exports = merge(common,prod);