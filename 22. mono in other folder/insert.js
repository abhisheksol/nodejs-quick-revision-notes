const get = require('./mongodb.js');

const main=async()=>{
    const data =await get
    const added={
        company:"vivo",
        model:"y20",
        price:15000

    }
    await data.insertOne(added)
    const res=await data.find().toArray()
    console.log(res);
}
main()