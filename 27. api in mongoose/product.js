const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/e_com")
mongoose.pluralize(null)

const sch=mongoose.Schema({
    company:String,
    model:String,
    price:String,
   
})
module.exports=mongoose.model("product",sch)



