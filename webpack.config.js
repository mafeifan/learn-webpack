const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['jquery'],
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
  },
  // 更容易地追踪错误和警告,将编译后的代码映射回原始源代码
  // 查看更多选项：https://doc.webpack-china.org/configuration/devtool
  devtool: 'inline-source-map',
  // webpack-dev-server 提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
  // 告诉开发服务器(dev server)，在哪里查找文件
  // https://doc.webpack-china.org/configuration/dev-server
  devServer: {
    contentBase: './dist',
    hot: true
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
    new webpack.HotModuleReplacementPlugin(),
    // 能自动生成html入口文件, 输出目录是output中定义的
    // 并添加打包的css和js到html中
    new HtmlWebpackPlugin({
      // 自定义html的title标签
      title: 'hot-module-replacement'
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
