// express ak framework ahe nodejs ja apkaya kam la easy banvataya ja kam node mada
// 5 6 line gata hoti yata ta 3 4 line mada hotaya 

// 1) express mada ak get method asta ta get('/pagename',(req,res)=>{ ..})

//     i)yata pg name mange aplaya html cha pg
//    ii)ani ta 2 parameter gataya ak req ani res.. req alya var kay karcha ani respon.. alya 
// var kay karcha

// 2)express use karna sathi amla tacha package install karva lagta

// 3) similar ahe http.createserver((req,res)=>{ ..}).listen(3000)

const express = require('express');

const app= express()

app.get("/home",(req,res)=>{
    res.send("hello this abhishek")
})
app.get("",(req,res)=>{
    res.send("hello this abhishek")
})
app.get("/help",(req,res)=>{
    res.send("hello this abhishek")
})

app.listen(4000)