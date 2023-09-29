const { log } = require('console');
const fs = require('fs');

const path = require('path');
const dirpath=path.join(__dirname)

const filepath=dirpath+"/filename"

fs.readFile(filepath,'utf8',(err,items)=>{   // jar ami yata utf8 nahi declare kala tar ta amla buffer return karta
    console.log(items);
})