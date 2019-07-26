// console.log("hello world!   ")
// node中的文件读写操作

var fs=require('fs')

fs.readFile('.vscode/launch.json',function(error,data){
    console.log(data.toString())
});