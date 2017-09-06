// 关于es6的import和export，即便没有安装babel，webpack能够提供开箱即用的支持。

// 我们要动态引入
// import _ from 'lodash;

function getComponent() {
  // 这个注释是必要的，根据配置生成的chunk name是lodash.chunk.js，移除注释会变成[id].chunk.js
  // 而且生成的chunk会在header标签中被引入
  return import(/* webpackChunkName: "lodash" */ 'lodash')
  .then(_ => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
    return element;
  })
  .catch(error => 'An error occurred while loading the component');
}  
 

getComponent().then(element => {
  document.body.appendChild(element);
})