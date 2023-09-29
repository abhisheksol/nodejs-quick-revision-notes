// java user data send karta (body mada postman) ta ami use kasa karna taya post method na 
// taya ami ak middle ware cha code lihato ja json code la convert karun data

// app.use(express.json());  data la convert karun gato karna data available honar

const get = require('./mongdb');
const express = require('express');
const app=express()

app.use(express.json());

app.post("/", async(req,res)=>{
   
    const data2=await get
    const data=req.body // user na data gatala ami gatoya 
    console.log(data);     // ata he data mongodb mada pan galu sakato insert one ni

    await data2.insertOne(data)


    res.send({name:"abhishek"})     //he data ami post kartoya postman var 
})
app.listen(3000)