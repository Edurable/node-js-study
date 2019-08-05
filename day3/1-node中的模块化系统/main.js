/**
 * 引用自定义的js文件，一个js文件可以称之为是一个node中的模块，并且一个js文件涉及到一个作用域的问题，但是获得到的这个模块
 * 想要使用模块中定义的变量，参数，方法等等，必须使用exports这个接口对象，进行导出，才可以是的另一个模块可以使用这个，require导入的
 * 自定义的模块中的方法，变量，对象等等
 *
 * 注意：
 *  默认的情况下的得到的自定义模块，也就是使用exports接口对象进行导出的模块化，默认是对象，我们想使用对象中的成员必须使用成员运算符才可以进行使用
 *      成员运算符也就是 ‘.’ 运算符
 *
 * 使用方法：
 *  如果一个模块想要直接导出为方法，字符串，参数时，可以这样使用
 *  module.exports=....
 *  而不是使用之前的方法：
 *  exports.foo=..
 */
var foo = require('./foo')
// console.log(foo)
// console.log(foo.fun1(1, 2))

/**
 *commonJS模块使用规范
 *  1、使用require进行模块的加载
 *      使用require加载的模块，加载的是exports接口导出的对象
 *  2、使用exports进行模块的导出
 *      对于我们希望，外部进行访问的成员，我们可以把这些公开的成员都挂在到exports接口对象中就可以了
 *      -- 导出多个成员（必须是将这些多个成员放在对象中进行导出，然后提供给外部使用，进行加载）：
 *          exports.foo='foo'
 *          exports.fun1=function(){...}
 *          exports.fun2=()=>{...}
 *          ...
 *
 *      -- 导出单个成员（导出的单个成员，其实无非就是一些字符串，单个函数等等，这样的成员，此时一个模块，进行加载会得到的就是一个模块的函数，或者是字符串等等）：
 *          module.exports='hello'
 *          注意：再一次使用导出单个成员，node会进行覆盖操作，也就是说，最终这个模块导出的是单个函数，而不是上面的'hello'字符串了
 *          module.exports=function(){..}
 *          ...
 *
 *      -- 使用module.exports导出多个成员
 *          module.exports={
 *              add:function(){}
 *              foo:'hello'
 *          }
 *          其实，这样的作法，就是导出了一个单一的对象
 *
 */
console.log(exports===module.exports)  // 结果是 true  也就是说操作的是同一个对象
var foo2 = require('./foo2')
console.log(foo2)
/*
*注意：
* 直接给exports是不管用的，可以把exports理解为一个对象，要给exports的成员赋值，而不是给exports这个对象进行重新赋值
 */
/**
 * 最终，我们自定的模块，返回的是module.exports，所以如果在一个自定义的模块中想同时使用module.exports和exports进行自定义模块内容
 * 切记，返回的是moudle.exports，同时存在moudle.exports和exports会让exports失效
 * */
/**
 * 无论怎么定义，怎么更改，怎么对两者进行赋值，最终返回的对象始终时module.exports
 * */
