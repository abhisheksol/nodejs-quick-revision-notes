// access data from node to--> html

const express = require('express');
const app=express()

app.set('view engine','ejs')

app.get('/home',(req,res)=>{
    const data={
        user:"abhihek",
        email:"abhi@gmail,com",
        id:"72b"
    }
    res.render('html',{data})
}).listen(3000)  
// <!--              <%= data.user %>       <%=  > he symbol use karto 
// ami node madun data la access karna sathi -->
// 