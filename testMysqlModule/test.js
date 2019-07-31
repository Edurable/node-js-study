
var mysql=require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'springcloud-study'
})

connection.connect()


connection.query('select 1+1',function (err,res,fields) {
    if (err){
        throw  err;
    }
    console.log('The result is :',res[0].solution)
})

