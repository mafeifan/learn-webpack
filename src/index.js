// 关于es6的import和export，即便没有安装babel，webpack能够提供开箱即用的支持。

import _ from 'lodash';
import printMe from './print';
import './css/style.css'

// 因为在external定义jquery，即便这么写也不会被webpack打包进去
const $ = require('jquery');

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  // jquery是我们用external配置从外部加载来的，并没有经过webpack打包
  console.log($('body').width())
  return element;
}


let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}
