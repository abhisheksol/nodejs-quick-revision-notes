// jita mai multiple routes use karto ak cha kam karna sathi ami multiple kam
// akada check karu shakto middleware na (yata routes= get(req,res)=>{.. })
// Eg:- " jita multiple time check karcha asta ki user login ahe ka nahi "

// 1. ya sathi ami 3 parameters gato (req,res,next)

const express = require('express');
const app=express()

const filterage=((req,res,next)=>{
    console.log("working");
    
    next()
})
app.use(filterage)
app.get("/",(req,res)=>{
    res.send("hello abhi")
})

app.listen(3000)