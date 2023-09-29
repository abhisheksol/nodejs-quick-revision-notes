import { useState } from "react";
export default function Data()
{
    let [data,setData]=useState("--------")
    function gettext(val)
    {
        let data=val.target.value
        console.log(data);
        setData(data)
    }
    return(
        <div>
            <h1>{data}</h1>
            <input type="text" name="" id="" onChange={gettext}/>
        </div>
    )
}