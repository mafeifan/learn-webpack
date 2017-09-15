
# webpack-study

本节安装了webpack-dev-server。
webpack-dev-server 提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。
也就是说修改文件可以自动刷新页面，极大提高开发效率。
注意不是热替换HMR，会看到页面闪动，关于HMR见5.development分支


具体步骤：
在webpack配置文件中添加devServer配置项，
然后在package.json中添加`"start": "webpack-dev-server --open"`
执行`npm start`启动webpack-dev-server，默认会打开http://localhost:8080/
修改print.js会重新编译并加载

关于域名，端口等更多配置项见[dev-server](https://doc.webpack-china.org/configuration/dev-server)

待研究：
webpack-dev-middleware

参考：https://webpack.js.org/guides/development/
