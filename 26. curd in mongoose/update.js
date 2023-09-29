const mongoose = require('mongoose');
mongoose.pluralize(null)

mongoose.connect("mongodb://127.0.0.1:27017/e_com")
const sch = mongoose.Schema({
    company: String,
    brand: String,
    model: String,
    price: Number

})


const save1 = async () => {
    
    const model = mongoose.model('product', sch)
    const res = model({
        company: "ASUS",
        brand: "ROG5",
        model: "ROG5",
        price: 50000
    })
    const check = await model.findOne({
        company: res.company,
        brand: res.brand,
        model: res.model,
    });

    if (!check) {
        const finalres = await res.save();
        console.log(finalres);
    } else {
        console.log("Duplication of data avoided");
    }

    console.log("done");
}
//    .................................update.call..........
const update=async()=>{
    const model=mongoose.model("product",sch)
    const modifiy=await model.updateOne(
        {company: "ASUS"},
       { $set:{price: 40000,company: "ASUS..."}}
    
    )
    // let saved=await modifiy.save()
    console.log(modifiy);
}
// ..............................delete.............

const del=async()=>{
    const model= mongoose.model("product",sch)
    const dele=await model.deleteOne({
        company: "ASUS..."})
    console.log(dele);
}
del()
save1()

// update()