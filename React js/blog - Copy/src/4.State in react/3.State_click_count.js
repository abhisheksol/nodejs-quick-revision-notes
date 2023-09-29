import { useState } from "react";
function Set(){
    let [data,setData]=useState(0)
    function change(){
        setData(data+5000)
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={change}>click</button>
        </div>
    )

}
export default Set;