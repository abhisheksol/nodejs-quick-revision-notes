// ak file mada mulitple files kasa banvanar 
// taya sathi amla module import karvala lagnar ahe "path" navcha ja kutala path barobar 
// kam karcha ahe ta sangata

// ani ak directory __dir ja kutala directory badala sangata

const fs = require('fs');
const path = require('path');

// const dirpath=path.join(__dirname)  
// console.log(dirpath);         -- ata cha directory cha path return karta --

const dirpath=path.join(__dirname,'files') 
// console.log(dirpath);

// loop use karu multiple files banvacha ahe

for(i=0;i<5;i++)
{
   //  yata "/" /abhishek.txt galna import ahe file folder mada files create karna sathi
   fs.writeFileSync(dirpath+"/abhishek"+i+".txt","hi " + i + " abhishek")
}