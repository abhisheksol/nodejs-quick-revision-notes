const express = require('express');
const model = require('./product.js');
const app=express()
app.use(express.json())


app.post("/abhi",async(req,res)=>{
    res.send("done")

    const data=req.body
    const check=model.findOne(data)
    if(!check){
        const for_save=new model(data) //yata new manun model mada data inert karva lagta 
        const finalres=await for_save.save()
        console.log(finalres);
    }
    else{
        console.log("dublication avoided");
    }
   
}).listen(3000) 

