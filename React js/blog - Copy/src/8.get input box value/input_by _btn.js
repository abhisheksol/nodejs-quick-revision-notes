import { useState } from "react";
export default function Set() {
    let [data,setData]=useState("")
    function get(val){
        let data=document.getElementById("input")
        console.log(data.value);
        setData(data.value)
    }
    return (
        <div>
            <h1>{data}</h1>
            <input type="text" name="" id="input" />
            <button type="submit"onClick={get}>Click</button>
        </div>
    )
}