const express = require('express');
const app=express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","ejs")


app.get("/",(req,res)=>{
    // res.send("hello world")
    res.render("html")
})

const map={
    "10":"Avenger",
    "50":"pathan",
    "30":"URI"
}
app.post("/pay",(req,res)=>{
     
    const data1=req.body.movie_name
    console.log(map[data1]);
    console.log(data1);
    const senddata={
        Name:map[data1],
        value:data1
    }
    res.json(senddata)
    
})


app.listen(5000)