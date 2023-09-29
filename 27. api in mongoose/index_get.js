const express = require('express');
const model = require('./product.js');

const app=express()
 
app.get("/",async(req,res)=>{
    const to_find=await model.find()
    res.send(to_find)
    console.log(to_find);
}).listen(3000)