// promise kay asta ki tula jasa ki mahita ki node he async ni code la exec karto

// java ami client.connect() he actually kup time gatao exec karla mag yala skip marun
// pudacha line la exec basically tyla he sangna sathi connection() la pahile execte kar
// ya sathi kahi tari promise use karta (dilala mahita wrong asu shakto maja andaza ahe he)

//.......................................................................................................
const {MongoClient} = require('mongodb');
const url="mongodb://127.0.0.1:27017"  
const client= new MongoClient(url)

// async function get(){
//     const connection=await client.connect()
//     const db=connection.db("e_com")
//     return db.collection("product")
    // const colle=db.collection("product")                  
    // const res=await colle.find({price: 2500}).toArray()  }..ya ak a operation sathi ami
                // sartka vacha 3 line connect()..etc partak operation sathi ka  bar
                // parat parat lihayacha ami paraka opearation sathi database la connect
            //    karata kasla basnar manun (write code once use mulitple times)
    // console.log(res); 
// }

async function get(){
    const connection=await client.connect()
    const db=connection.db("e_com")
    return db.collection("product")
}

const main= async()=>{
    const data=await get()
    const res=await data.find().toArray() // ami get().find().toArray liha tar error ya 
    //manun ami 
    console.log(res);
}

main()