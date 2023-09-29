import { useState } from "react"

export default function Test() {
 

    const [data,setdata]=useState(0)
    const [data1,setdata1]=useState(0)

    function set() {
        console.log("set is called");
        return data*5                           //java ami update1 dabanar tavcha update honar na 
        // pan he update2 dabala var h3 tag mada kaho change tar hota nahi pan, he fun() call hotya bina karna
        // console mada bag update2 dabun tu la he bataya " set is called "
    }
    return(
        <>
        <h2>this is update 1 :{data}</h2>
        <h2>this is update 2 :{data1}</h2>
        <h3>{set()}</h3>
        <button onClick={()=>setdata(data+1)}>update1</button>
        <button onClick={()=>setdata1(data1+1)}>update2</button>
        </>
    )
    
}