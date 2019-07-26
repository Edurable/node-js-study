var http=require('http')
var server=http.createServer()
server.on('request',function(req,res){
    console.log("收到请求")
    console.log("请求的客户端地址是：",req.socket.remoteAddress,req.socket.remotePort)
    var url=req.url
    if(url=='/'){
        res.end("indesx  page  response")
    }else if (url === '/login') {
        res.end('login page')
    } else if (url === '/products') {
        var products = [{
            name: '苹果 X',
            price: 8888
          },
          {
            name: '菠萝 X',
            price: 5000
          },
          {
            name: '小辣椒 X',
            price: 1999
          }
        ]
    
        // 响应内容只能是二进制数据或者字符串
        //  数字
        //  对象
        //  数组
        //  布尔值
        res.end(JSON.stringify(products))
    } else {
        res.end('404 Not Found.')
    }

});

server.listen(3000,function(){
    console.log("服务端已经启动，可以进行正常的访问")
})