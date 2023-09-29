const fs = require('fs');
const path = require('path');
const dirpath=path.join(__dirname)
const filepath=dirpath+"/filename"

fs.appendFile(filepath,"this is appended file",(err)=>{  // bakcha jar nahi ala !err tar done print kar
    if(!err) console.log("done");
})
