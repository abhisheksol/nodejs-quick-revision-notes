const fs = require('fs');

const input=process.argv

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3],input[4])
}


// PS D:\webdesign\8hrs nodejs\7.input from command ine> node ./file2.js add abhishek.txt "hello abhi"

// 1. he file la add karta  "add" argument bagun

// PS D:\webdesign\8hrs nodejs\7.input from command ine>node ./file2.js remove abhishek.txt "hello abhi" 

// 2. he file la delete karta  "remove" argument bagun