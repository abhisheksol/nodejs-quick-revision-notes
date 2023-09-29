const {MongoClient} = require('mongodb');

const url="mongodb://127.0.0.1:27017"  
const client=new MongoClient(url)

// define a connection function for other operations

async function get(){
    const con=await client.connect()
    const db=con.db("e_com")
    const collection= db.collection("product")
    return collection
}

module.exports=get()