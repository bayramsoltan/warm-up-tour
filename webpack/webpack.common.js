const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test:/\.html$/,
        use:["html-loader"]
      },
      {
        test:/\.(png|jpg|svg|gif|jpeg)$/,
        type:'asset/resource'
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
    inject:"body"
  })],
};
