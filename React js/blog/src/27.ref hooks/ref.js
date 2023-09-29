import { useRef, useState } from "react"
import "./css.css"
export default function Reef() {
    const inputref=useRef(null)
    const [data,setdata]=useState("")

function run() {
    // inputref.current.value="1000"  
    setdata(inputref.current.value)

    
}

    return(
        <div className="App">
            <h2> ur name:{data}</h2><br/>
            <h2>enter ur name:</h2>
            <input type="text" ref={inputref}/>
            <button onClick={run}>Click</button>

        </div>
    )
    
}