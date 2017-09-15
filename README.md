# webpack-study

懒加载

要点：
1. 注释不能丢 /* webpackChunkName: "print" */
2. import返回的是换个promise

```
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print')
    .then(module => {
      console.log(module);
      // 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，
      // 因为它才是 promise 被处理后返回的实际的 module 对象。
      var print = module.default;
      print();
    });
```