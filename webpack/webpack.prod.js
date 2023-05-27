const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const prod = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "img/[hash][ext]"
  }, 
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader, 
            "css-loader"
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader, 
            "css-loader", 
            "sass-loader"
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: 
              ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contenthash].css",
    })
  ]
};
module.exports = merge(common, prod);