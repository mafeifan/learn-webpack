// 关于es6的import和export，即便没有安装babel，webpack能够提供开箱即用的支持。

import _ from 'lodash';
import './css/style.css';

const $ = require('jquery');

function component() {
  const element = document.createElement('div');
  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

$('body').html(component());

// document.body.appendChild(component());
