// 1. npm i mongodb

// 2. phela database la connect karcha connect()

// 3.kutala db la connect karcha tacha nav
// 4.collection mada kay karcha ta next 

// const {MongoClient} = require('mongodb');

// ...........................................................................


const {MongoClient} = require('mongodb');   //pahile tule mongodb cha package import karva lagta
//  (tya mada {MongoClient}) imp ahe 
const url="mongodb://127.0.0.1:27017"   // url define karcha asta kuta connect karcha ahe

const client=new MongoClient(url)      //"instance" create karva lagta

// client.connect() kadi pan promise return karta tayla handle karna sathi tula function la async declare karva lagta
// ani connect() la await karva lagta 
//tujar connect() double click kala ki tita lihun yata ki ya promise return karta

async function getdata(){
    const conn=await client.connect()       //db la connect karcha
    const db=conn.db("e_com")               //kutala db la karcha tacha nav
    const collection=db.collection("product")//kutala collection select karcha

    const res=await collection.find({}).toArray()   //collection var kay operation perform karcha 
    // he varcha line promise return karta manun yala pan await declare karto
    // java ami yala execute karto tava amla kayta ki he pan promise return karla --> o/p-->
                                                      //[nodemon] restarting due to changes...
                                                      // [nodemon] starting `node ./access_db.js`
                                                       // Promise { <pending> }  -->promise
    console.log(res);
}
getdata()