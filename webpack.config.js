const Merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge.smart(commonConfig, {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    library: 'frontend-component-site-header',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
    '@edx/frontend-i18n': {
      commonjs: '@edx/frontend-i18n',
      commonjs2: '@edx/frontend-i18n',
    },
    '@edx/frontend-logging': {
      commonjs: '@edx/frontend-logging',
      commonjs2: '@edx/frontend-logging',
    },
  },
  plugins: [
    // Cleans the dist directory before each build
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../'),
    }),
    // Copies Sass files to output directory
    new CopyWebpackPlugin([
      { from: './src/*.scss', to: './' },
    ]),
  ],
});
