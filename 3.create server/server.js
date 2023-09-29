const http = require('http');// server cha request and response handle karna sathi
// http modules use karto
// 1. module la import tar kala 
// ata server create cha ahe 

http.createServer((req,res)=>{
   res.write("hello, abhishek i am watching tutorial of nodejs of 8hrs")
   res.end();
}).listen(3000)