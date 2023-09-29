const get = require('./mongodb.js');

const update1=async()=>{
    const data=await get
    const find={"company": "vivo"};
    const modidify={$set:{"model":"s20"}}
    await data.updateOne(find,modidify)
    const res=await data.find({"company": "vivo"}).toArray()
    console.log(res);
}

update1()