// ata ami html la load karnar ahe js 

//  taya sathi amala tacha "path" dayava lagnar ahe apanlya ata jaya "directory" mada
// kam karlo tacha

// taya saathi amla " path " package import karva lagnar ahe ani taya link karva lagnar 
// current directory sobath

const { log } = require('console');
const express = require('express');
const path = require('path');

const app=express()

const publicpath=path.join(__dirname,'public')
console.log(publicpath); //path tar define kalo ami yata ata yala use karcha ahe 
// taya sathi ami use karto " use " function 

app.use(express.static(publicpath))
app.listen(3000)