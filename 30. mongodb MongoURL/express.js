const express = require('express');
const app = express();
const model = require('./model.js');

app.use(express.json());

const run = async () => {
    try {
        const moduls = await model.find().toArray();
        console.log(moduls);

        // Log each item in the data array
        moduls.forEach(item => {
            console.log(item);
        });
    } catch (error) {
        console.error(error);
    }
};

run();


// app.get('/',async(req,res)=>{
//     res.send("hello world")
    
//     // const data1=req.body
//   const data=new model(data1)
//   const res1=await data.save()
//   console.log(res1);
// })
