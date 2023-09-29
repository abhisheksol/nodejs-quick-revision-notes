import { useMemo, useState } from "react"

export default function Test() {
 

    const [data,setdata]=useState(0)
    const [data1,setdata1]=useState(0)

  const set=useMemo(()=>{
    console.warn("set is called");
        return data*5 
  },[data])
    return(
        <div className="App">
        <h2>this is update 1 :{data}</h2>
        <h2>this is update 2 :{data1}</h2>
        <h3>{set}</h3>
        <button onClick={()=>setdata(data+1)}>update1</button>
        <button onClick={()=>setdata1(data1+1)}>update2</button>
        </div>
    )
    
}