# webpack-study

代码分离是webpack很重要的功能。
关于动态导入建议用import写法。不建议用require.ensure已被废弃

How:
1. 先在配置文件的output添加chunkFilename
2. 使用import(/* webpackChunkName: "lodash" */ 'your_module_name')
3. 这样就会生成一个名为lodash的chunk。因为安装了html-webpack-plugin所以会自动插入，
不过是在header标签中而非body。

参考：https://doc.webpack-china.org/guides/code-splitting