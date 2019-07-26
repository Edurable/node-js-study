var os = require('os');
console.log(os.cpus(),"操作系统的总容量是:",os.totalmem()/1024/1024,"TB")