// yata ami check karnar ahe user cha age middleware na jar user age  18+ asla tar tayla 
// website cha access karu daycha nahi tar nahi

const express = require('express');
const app=express() //instance

const filterage=(req,res,next)=>{
    if(req.query.age>=18){
        
        next()
    }
    else{
        res.send("age donot fit access this website")
    }

}
app.use(filterage)

app.get('/',(req,res)=>{
    // req.query.age
    res.send("welcome user to home pg")
})
app.listen(3000)