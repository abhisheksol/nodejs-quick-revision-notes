const mongoose = require('mongoose');


let uri1 ='mongodb+srv://abhishek:Nqys30PKwJOZAKih@cluster0.n5w6x26.mongodb.net/'
mongoose.connect(uri1)

const sch= mongoose.Schema({
    name:String,
    phoneno:Number,
    email:String,
    Movie_Name: String,
    Total_Seats_Selected: String,
    Ticket_Price: Number,
    Total_Price: Number,
    password:String,
    datetime:String

})
module.exports=mongoose.model("logindata",sch)