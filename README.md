# webpack-study

本节安装了uglifyjs-webpack-plugin。
好像不支持es6，实测写let要会报错，要写var。所以要引入babel先转义。
貌似(webpack-closure-compiler)[https://github.com/roman01la/webpack-closure-compiler]更好用些。

还安装了webpack-merge。合并配置文件工具

新增webpack.dev.js和webpack.prod.js
使用npm run dev和npm run build

参考：https://doc.webpack-china.org/guides/production