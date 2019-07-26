// nodejs 的文件模块化使用，使用require进行模块加载
var v1='aaa'  //测试在a和b的js文件中同时定义这个v1变量，
// 此时，在浏览器中时，后面的b js文件中的v1参数会将a js文件中的v1参数进行覆盖，但是在node js文件中则不会，而v1参数的值是a js文件中的v1参数
console.log('a.js文件开始加载')
function add(x,y){
    return x+y
}
require('./b')

console.log('a. js文件加载完成')
console.log('v1 变量参数的值是',v1)

//require引用的模块，不带相关路径或者是绝对路径，默认访问的是核心模块，所以如果要访问自己定义的模块则必须要加上路径