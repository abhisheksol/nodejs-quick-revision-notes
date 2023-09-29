const express = require('express');

const app=express()


app.get('',(req,res)=>{
    data=req.query.name
    res.send(`
    <input type="text" value="${data}">
    <input type="button" value="press">
    `)
}).listen(3000)