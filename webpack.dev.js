const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
