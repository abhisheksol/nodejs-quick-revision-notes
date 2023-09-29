import { useState } from "react"

export default function Hideshow() {
    let [data,setdata]=useState(false);
    
    return (
        <div>
            { data?<h1>hello this screate data!!</h1>:null}
            <button onClick={()=>{setdata(false)}}>hide</button>
            <button onClick={()=>{setdata(true)}}>show</button>            
        </div>
    )
}