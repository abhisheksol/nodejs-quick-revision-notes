// template engine amla dynamic page sangata kam karana sathi mada karta 
// ejs he template engine ahe ani hbs pan ja registration pg banvan mada use kalata

// amla pahila snagva lata node la ami ejs use karlo 
// 2. ta sangato ami " set " function use karun taya mada

//ejs he dynamic page provide tya sathi static files saraka tacha path daycha garja
// nahi fakta ta pg " views " navcha folder maada pahijala 

const express = require('express');
// const path = require('path');
const app= express()
// const filepath=path.join(__dirname,'views')  

// app.use(express.static(filepath))

app.set('view engine','ejs')          //  --> I.M.P

app.get('/profile',(req,res)=>
{
    res.render('profile')
})

app.listen(3000)