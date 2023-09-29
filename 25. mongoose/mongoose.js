
const mongoose = require('mongoose');
mongoose.pluralize(null);

const run=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e_com")
    const obj= new mongoose.Schema({
        name:String
    });
    const model=new mongoose.model('product',obj)
    const data=new model({name:"abhishek"})
    const res=await data.save();
    console.log(res);
}
run()
// const mongoose = require('mongoose');

// const main=async()=>{
//     await mongoose.connect("mongodb://127.0.0.1:27017/e_com")
//     const schema=mongoose.Schema({company:String})

//     const mod=new mongoose.model("product",schema)
//     const insert=mod({company:"lg"})
//     const res=await insert.save()
//     console.log("data :"+res);

// }
// main()