
import React,{useState}from "react"
import "./css.css"

export default function Sendalert(){
    const [data,setdata]=useState(0)
  
     function alertsend(){
       
        setdata(data+1)
        // setdata2(data-1)
    }
    function goback(){
        setdata(data-1)
    }
    return(
        
        <div>
            <h1>lecture no</h1>
            <h1>developer name: {data}</h1>
                <button className="btn" onClick={alertsend}>absent</button>
                <button className="btn2" onClick={goback}>back</button>

        </div>
 
    )
}