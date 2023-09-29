import { useState } from "react";
import "./css.css"
export default function Btn() {
let [name,setname]=useState("")
    function get() {
        let name1=document.getElementById("data")
        // alert(name.value);
        setname(name1.value)
        
    }
    return (
        <div>

            
                {name}
                <input type="text" name="" id="data" />
                <br />
                <button type="submit" onClick={get}>send...</button>
            

        </div>
    )
}