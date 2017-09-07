# webpack-study

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