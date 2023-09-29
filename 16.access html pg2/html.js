const express = require('express');
const path = require('path');

const app=express()

const staticpath=path.join(__dirname,'public')
 app.use(express.static(staticpath))

//  macha folder ami dusra dusra html cha pg la access karna sathi ami 
// tacha extenstion data hota last mada url mada taya pg nav data hoto
// jasa ki localhost:/3000/home.html

// bana he lehata kasa access karcha -> sendfile use kacha 

app.get('/about',(req,res)=>{
    res.sendFile(`${staticpath}/about.html`)
})
app.get('/home',(req,res)=>{
    res.sendFile(`${staticpath}/index.html`)
})
app.get('/help',(req,res)=>{
    res.sendFile(`${staticpath}/help.html`)
})

// jar user taya pg cha request karta asla ja ata avaible nahi tar
// get function mada "*" arugment takun message pass karu shakto

app.get('*',(req,res)=>{
    res.send(`<h1>Sorry! this pg is not avalible</h1>`)
})
app.listen(3000)