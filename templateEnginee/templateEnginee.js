/**
 * 使用require就可以加载art-template模板引擎的模块
 *  如何知道，自己加载的模块的名称--使用的npm install 安装的模块的名称就是require加载的模块的名称
 * @type {artTemplate | ((filenameOrTemplateId: string, content?: (string | Object)) => any)}
 */
/**
 * 示例：使用  模板引擎的函数进行动态的绑定，
 * @type {artTemplate | ((filenameOrTemplateId: string, content?: (string | Object)) => any)}
 */
var art_template = require('art-template')
var fs = require('fs')
var html = fs.readFile('index.html', function (err, data) {
    if (err) {
        console.log('errpor')
    }

    var ret = art_template.render(data.toString(), {
        title: 'hello'
    })
    console.log(ret)
})
