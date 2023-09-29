import { useState } from "react"

export default function SEND(props) {

    const [name,setname]=useState("")
    const [rollno,setroll]=useState("")
    const [num,setnum]=useState("")
    function post(e) {
        e.preventDefault()
        console.warn("api==> ",{name,rollno,num});
        props.reci(name,rollno,num)
        
    }
    return(
        <div className="App">
        <h1>POST api ON post 5000</h1>
        <form>
            <input type="text" value={name}  onChange={(e)=>setname(e.target.value)}/><br/><br/>
            <input type="text" value={rollno} onChange={(e)=>setroll(e.target.value)}/><br/><br/>
            <input type="text" value={num} onChange={(e)=>setnum(e.target.value)}/><br/><br/>
            <button onClick={post}>SEND</button>
        </form>
    </div>
    )
   
    
}