/**
 * require方法有两个作用
 *  1、加载文件模块并执行里面的代码
 *  2、拿到被加载的文件模块到处的接口对象
 *
 *  在每一个模块中都提供了一个-对象：exports以及import
 *  默认的exports是一个空对象
 * @type {string}
 */

var foo='aaa'
// var http=require('http')
var modelB=require('./b')
console.log(foo)
console.log('根据导入的b中的exports对象获取导出的b.js文件中的exports对象的add方法测试结果：',modelB.add(10,20)) //require方法可以获取到自定义的模块中的exports对象，因此，就可以根据exports对象使用自定义模块中的方法，参数等等
