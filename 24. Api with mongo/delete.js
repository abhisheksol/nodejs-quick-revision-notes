const get = require('./mongdb');
const express = require('express');

const mongodb = require('mongodb'); //
// _id:objectId('64cdfbd88561ce4614ce6260')
const app=express()

app.delete('/:id',async(req,res)=>{     //ami ata parameter na id ganar ahe localhost:/3000/shjsdj65ds
     var myId = (req.params.id).trim();
   //Actually the Id you are fetching have whitespaces in it so adding trim() to your id will work


     console.log("-->"+myId);

     const getdata=await get;
     // const res=await getdata.deleteOne(_id:data)  java ami asa ak collection delete karto tava hotya nahi
     // karna id ak obj id pan gata compass var bagu shakto "_id:objectId('64cdfbd88561ce4614ce6260')"
     // taya sathi amala suda obj create karva lagta ta mi varti kala " const mongodb = require('mongodb'); "
     
     const res1= await getdata.deleteOne({_id:new mongodb.ObjectId(myId)})
     console.log(res1);
     res.send("done")
}).listen(3000)
