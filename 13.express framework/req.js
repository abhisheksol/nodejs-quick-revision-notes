const express = require('express');

const app=express()


app.get("",(req,res)=>{
    console.log(req.query);
    res.send("hello "+req.query.name)
})

app.listen(3000)