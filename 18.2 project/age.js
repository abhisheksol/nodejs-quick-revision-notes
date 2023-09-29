const express = require('express');
const app=express()
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs') 
const filterage=(req,res,next)=>{
    if(req.body.data>=18){
        next()
    }
    else{
        res.send("u donot fit in age limit")
    }
 }

app.get('/',(req,res)=>{
    res.render('html')
})
app.post("/send",filterage,(req,res)=>{
   res.send("welcome user")

})
app.listen(3000)












// const express = require('express');
// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.send(`
//         <form action="/submit" method="post">
//             <input type="text" name="inputData">
//             <button type="submit">Submit</button>
//         </form>
//     `);
// });

// app.post("/submit", (req, res) => {
//     const inputData = req.body.inputData;
//     res.send(`You entered: ${inputData}`);
// });

// app.listen(3000, () => {
//     console.log('Server started on http://localhost:3000');
// }); 