const get = require('./mongodb');

const del=async()=>{
    const data=await get
    const find_delete={"model": "y20"}
    const res=await data.deleteMany(find_delete)
    console.log(res);
}
del()