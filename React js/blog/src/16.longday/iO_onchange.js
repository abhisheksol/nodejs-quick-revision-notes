import { useState } from "react"

export default function Onchange() {
    
    let [text,settext]=useState("")
    function onchange(val){
        let info=val.target.value
        settext(info)
    }

    return(
        <div>
            <h1>{text}</h1>
            <input type="text" name="" id="" onChange={onchange}/>
        </div>
    )
    
}