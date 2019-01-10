var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

var commonConfig = require('./webpack-common.config.js');

module.exports = {
  entry: './example/src/index.js',
  output: {
    path: path.resolve('./example/dist'),
    libraryTarget: 'umd',
  },
  module: commonConfig.module,
  plugins: [
    new HtmlWebPackPlugin({
      template: "./example/src/index.html",
      filename: "./index.html"
    })
  ]
};