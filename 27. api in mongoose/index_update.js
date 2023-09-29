const express = require('express');
const app=express()
const model = require('./product.js');
app.use(express.json())
app.put("/:_id",async(req,res)=>{
    console.log(req.params);
    const update={$set:req.body}
    const find=req.params
    const result=await model.updateOne(find,update)
    console.log(result);
}).listen(3000)