# webpack-study

使用external从外部加载模块

有时候我们不想让webpack打包某些模块，比如jquery。
可以添加externals配置项

1. 首先改动html，添加<script src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous"></script>

  不受HtmlWebpackPlugin的template影响

2. 配置external

```
externals: {
  jquery: 'jQuery'
}
```

3. 在js中

```
import $ from 'jquery';
$('.my-element').animate(...);
```