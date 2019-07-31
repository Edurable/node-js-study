var http = require('http')
var server = http.createServer()
var fs = require('fs')
server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                console.log("文件未找到！")
            }
            fs.readdir('G:\\node\\coding\\nodejsStudying', function (err, files) {
                if (err) {
                    console.log('文件夹未找到！')
                }
                var content = ''
                files.forEach(function (item) {
                    // console.log(item)
                    content += `
                <tr>
                    <td><a href="*">${item}</a></td>
                </tr>
                `
                })
                data = data.toString()
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data.replace('***',content))
            })

        })

    }
})

server.listen(3000, function () {
    console.log('server is running')
})