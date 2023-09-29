const get = require('./mongdb.js');
const express = require('express');
const app = express()


app.get("/", async (req, res) => {
    const conn = await get
    const data= await conn.find().toArray()
    res.send(data)
    console.log(conn);

}).listen(3000)