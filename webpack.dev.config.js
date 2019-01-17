const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');

module.exports = {
  entry: './example/src/index.jsx',
  output: {
    path: path.resolve('./example/dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  module: commonConfig.module,
  plugins: [
    new HtmlWebPackPlugin({
      template: './example/src/index.html',
      filename: './index.html',
    }),
  ],
};
