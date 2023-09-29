const {MongoClient} = require('mongodb');
const url="mongodb://127.0.0.1:27017"  
const obj=new MongoClient(url)

async function get(){
    const connect=await obj.connect()
    const db=connect.db("e_com")
    const collection=db.collection("product")
    return collection
}

module.exports=get()