const fs = require('fs');
const path = require('path');
const dirpath=path.join(__dirname)
const filepath=dirpath+"/filename"

fs.unlinkSync(filepath) //file la delete karta