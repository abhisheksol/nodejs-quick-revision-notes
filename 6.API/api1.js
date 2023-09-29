const http = require('http');
const data = require('./export');
const { json } = require('stream/consumers');
const { writeHeapSnapshot } = require('v8');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'abhisheks api'})
    res.write(data)
    res.end();
}).listen(3000)