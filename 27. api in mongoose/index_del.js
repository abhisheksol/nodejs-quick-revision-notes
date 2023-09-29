const express = require('express');
const model = require('./product.js');
const app=express()

app.delete("/:_id",async(req,res)=>{
   const dele=await model.deleteOne(req.params)
   console.log( req.params);            //yata obj chi _id already atach hun yata manje data obj form mada yata { _id: '64d8638a8e52e382af29c505' }
   console.log( "_id:"+req.params._id);
   res.send(dele)
}).listen(3000)