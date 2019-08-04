/**
 * node.js启动的服务器是Nio的,会不断的接受到请求,并根据请求做出相应的响应
 */
// 设置正确的浏览器信息相应
var http = require('http')
var server = http.createServer()

server.on('request', function (req, res) {
    //设置浏览器头,让浏览器知道相应的解析数据的编码格式是下面的普通文本,并且编码格式是utf-8的
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    // res.end("hello 世界")
    var url = req.url
    if (url === '/plain') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end("hello 世界")
    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<p>hello world<a href="/1.js">点击查看1.js文件</a> node.js!</p>')
    }
    if(url==='/1.js'){
        var fs=require('fs')
        var data=fs.readFile('./1.js',(err,data)=>{
            if(err){
                res.end('文件读取失败!')
            }
            res.setHeader('Content-Type', 'text/plain;charset=utf-8')
            res.end(data.toString())
        })
    }

})
server.listen(3000, function () {
    console.log('server is running')
})