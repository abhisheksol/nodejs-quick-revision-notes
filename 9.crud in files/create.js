const fs = require('fs');
// fs.writeFileSync("filename",'this crud tut ') he file folder cha bahar create karta hota

const path = require('path');
const dirpath=path.join(__dirname) // yata create karna sathi tyala sangva lagta ki ya path mada create kar
fs.writeFileSync(dirpath+"/filename",'this crud tut ')
