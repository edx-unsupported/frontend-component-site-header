var path = require('path');
var commonConfig = require('./webpack-common.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    library: 'frontend-component-header',
    libraryTarget: 'umd',
  },
  module: commonConfig.module,
  plugins: [
    // Cleans the dist directory before each build
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../'),
    }),
    // Copies Sass files to output directory
    new CopyWebpackPlugin([
      { from: './src/scss', to: './scss' },
    ]),
  ],
};