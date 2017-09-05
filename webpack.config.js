const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['jquery'],
  }, // 入口文件
  output: {
    // entry是入口，不能再定义成filename: 'bundle.js'了，要使用如下的替换符号
    // 输出文件名,类似vendor.bfd97.js 每次修改文件后的hash会变
    filename: '[name].[hash:5].js',
    // // 输出目录。
    path: path.resolve(__dirname, 'dist'),
    // https://webpack.js.org/configuration/output/#output-publicpath
    // 访问地址 <script src="dist/xxx.js"></script>
    // publicPath : 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 结合CommonsChunkPlugin，能实现在index.html中自动加上<link>标签
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
        // 如果用下面的写法，ExtractTextPlugin是没效果的而且还会将css放到html中
        /*
        use: ['style-loader', 'css-loader']
        */
      }
    ]
  },
  plugins: [
    // 能自动生成html入口文件, 输出目录是output中定义的
    // 并添加打包的css和js到html中
    new HtmlWebpackPlugin({
      // 自定义html的title标签
      title: 'Asset Management'
    }),
    // 提取公共的模块到vendor，供缓存
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // https://github.com/johnagan/clean-webpack-plugin
    // 这个插件不好用，exclude貌似没效果。待换其他方案
    new CleanWebpackPlugin(['dist/index.html', 'dist/main.*.js', 'dist/manifest.*.js'], {
      watch: true,
      exclude: ['vendor.*.js']
    }),
    // 它会将所有的入口chunk(entry chunks)中import(require)的*.css,移动到独立分离的 CSS 文件。
    // 使用场景：css有点大，利用浏览器并行加载js和css，提高效率。
    // 可以结合loader，创建多个实例。 see: https://doc.webpack-china.org/plugins/extract-text-webpack-plugin
    new ExtractTextPlugin('vendor.css'),
  ]
};
