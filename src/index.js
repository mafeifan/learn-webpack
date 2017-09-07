// 关于es6的import和export，即便没有安装babel，webpack能够提供开箱即用的支持。

import _ from 'lodash';

function component() {

  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

  const btn = document.createElement('button');
  btn.innerHTML = 'click me and look at console';

  element.appendChild(btn);

  // btn.onclick = e => import(/* webpackChunkName: "print" */ './print')
	 //  .then(module => {
	 //  	console.log(module);
	 //  	// 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，
	 //  	// 因为它才是 promise 被处理后返回的实际的 module 对象。
	 //  	var print = module.default;
	 //  	print();
	 //  });

  return element;
}


document.body.appendChild(component());
