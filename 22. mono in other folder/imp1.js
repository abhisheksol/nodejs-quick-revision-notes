const get = require('./mongodb.js');

const main=async()=>{
    const data=await get
    const res=await data.find({}).toArray()
    console.log(res);
}
const main2=async()=>{
    const data=await get
    const res=await data.find({ model: 'm40'}).toArray()
    console.log(".................................................");
    console.log(res);
}

main()
main2()