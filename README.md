# webpack-study

缓存

prod要尽量利用浏览器缓存vendor，可以使用[chunkhash]
dev不需要缓存，要追求更快的编译速度，可以使用[hash]

注意：当使用[chunkhash]要关闭HMR，否则可能会报错"Cannot use [chunkhash] for chunk in '[name]-[chunkhash].js' (use [hash] instead)"