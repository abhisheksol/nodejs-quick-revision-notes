import { useState } from "react"


export default function Form() {
    function get(e) {
        setres([name," ",opt," ",chec," "])

        e.preventDefault()

    }
    let [name,setname]=useState("")
    let [opt,setopt]=useState("")
    let [chec,setcheck]=useState("")
    let [res,setres]=useState("")

    
    return (
        <div>
            <form onSubmit={get}>
                <input type="text" onChange={(e)=>setname(e.target.value)}/><br/><br/>
                <select name="" id=""  onChange={(e)=>setopt(e.target.value)}>
                    <option value="pune">pune</option>
                    <option value="nashik">nashik</option>
                    <option value="mumbai">mumbai</option>
                    <option value="solapur">solapur</option>
                </select><br/><br/>
                <input type="checkbox" name="" id="" onChange={(e)=>setcheck(e.target.checked)}/><label>agree condition</label><br/>
                <button type="submit">submit</button>

            </form>
            {/* <label >{[res]}</label> */}
            <input type="" value={res}/>
        </div>
    )
}