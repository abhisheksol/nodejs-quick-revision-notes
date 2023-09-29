// using the progress.argv we will take input form(terminal) user such as
// -> file name , content

const fs = require('fs');

const data=process.argv
fs.writeFileSync(data[2],data[3])


//  node ./file.js filename.txt "abhsihek"