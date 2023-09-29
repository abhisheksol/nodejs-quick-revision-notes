const express = require('express');
const app=express()

app.get("",(req,res)=>{

// ja ami parameter dato localhost://3000/?name=abhi he get parameter=abhi kasa karcha
// req.query.parameter
    const data=req.query.name
    res.send(` 
    <h1> hello this ${data} Solapure</h1>
    `)
}).listen(3000)