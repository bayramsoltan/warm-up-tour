const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  }
};

module.exports = merge(common,prod);