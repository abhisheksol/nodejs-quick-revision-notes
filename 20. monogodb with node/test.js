const {MongoClient} = require('mongodb');
const url="mongodb://127.0.0.1:27017"

const client= new MongoClient(url)

async function get(){
    const connection=await client.connect()
    const db=connection.db("e_com")
    const colle=db.collection("product")
    const res=await colle.find({price: 2500}).toArray()
    console.log(res);
}
get()


