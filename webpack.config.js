const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['lodash'],
  },
  output: {
    // 输出文件名,类似vendor.bfd97.js 每次修改文件后的hash会变
    // filename: '[name].bundle.js',
    filename: '[name].[hash:5].js',
    // 输出目录。
    path: path.resolve(__dirname, 'dist'),
    // https://webpack.js.org/configuration/output/#output-publicpath
    // 访问地址 <script src="dist/xxx.js"></script>
    // publicPath : 'dist/',
    // 决定非入口 chunk 的名称。
    // import(/* webpackChunkName: "lodash" */ 'lodash').then... 会生成lodash.chunk.js
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 能自动生成html入口文件, 输出目录是output中定义的
    // 并添加打包的css和js到html中
    new HtmlWebpackPlugin({
      // 自定义html的title标签
      title: 'Lazy loading'
    }),
    // 提取公共的模块到vendor，供缓存
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    // https://github.com/johnagan/clean-webpack-plugin
    // 这个插件不好用，exclude貌似没效果。待换其他方案
    new CleanWebpackPlugin(['dist/index.html', 'dist/main.*.js', 'dist/manifest.*.js'], {
      watch: true,
      exclude: ['vendor.*.js']
    }),
  ]
};
