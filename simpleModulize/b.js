console.log('b.js 文件开始加载')
var v1='bbb'
require('./c')
console.log('b.js 文件加载完成')

console.log(add(10,20))  //设想在a js文件中之前定义了add函数，然后在b js文件中进行使用
//此时node js会默认的设定为，b js 文件不会污染任何其他的文件，b js文件就是一个独立的文件,这就是node js中的模块的作用域
// ，出去这个作用域，js文件不会再起作用