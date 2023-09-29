// to update the db we use put ()

const get = require('./mongdb');
const express = require('express');
const app = express()

app.use(express.json());



app.put('/', async (req, res) => {
    const data = await get
    console.log(req.body);
    // ......................................
    const find={"company": "iphone "}
    const set={$set:req.body}
    await data.updateOne(find,set)



}).listen(3000)
