const http = require('http'); // import modules http

function test(req,res){
    res.write("i am abhishek")
    res.end();

}

http.createServer(test).listen(4500)