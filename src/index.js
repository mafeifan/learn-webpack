// 关于es6的import和export，即便没有安装babel，webpack能够提供开箱即用的支持。

import _ from 'lodash';
import printMe from './print.js';

const $ = require('jquery');

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

$('body').html(component());

// document.body.appendChild(component());
