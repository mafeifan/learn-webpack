# webpack-study


缓存

prod要尽量利用浏览器缓存vendor，可以使用[chunkhash]
dev不需要缓存，要追求更快的编译速度，可以使用[hash]

注意：当使用[chunkhash]要关闭HMR，否则可能会报错"Cannot use [chunkhash] for chunk in '[name]-[chunkhash].js' (use [hash] instead)"
=======
HMR热模块替换

开启步骤
1.安装webpack-dev-server
2. 配置文件中，hot: true
```
devServer: {
  contentBase: './dist',
  hot: true
},
```
3.添加热替换插件，new webpack.HotModuleReplacementPlugin()

修改样式会发现发生了变化，而页面没有刷新


待研究：
webpack-dev-middleware

参考：https://webpack.js.org/guides/development/

