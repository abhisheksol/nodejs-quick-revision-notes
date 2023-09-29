import { useState } from "react"
export default function Set() {
    function getdata(e) {
        console.log([input ,opt, tnc]);
        setres([input ,opt, tnc])
        e.preventDefault()
    }
    let [input,setip]=useState("")
    let [opt,setopt]=useState("")
    let [tnc,settnc]=useState("")
    let [res,setres]=useState("")
    return (
        <div> <br /><br />


            <form action="" onSubmit={getdata}>
                <input type="text" placeholder="enter ur name" onChange={(e)=>setip(e.target.value)} /> <br /><br />
                {/* ================================================ */}
                <select name="" id=""  onChange={(e)=>setopt(e.target.value)}>
                    <option value="pune">pune</option>
                    <option value="mumbai">mumbai</option>
                    <option value="kolkata">kolkata</option>
                </select><br /><br />
                {/* ================================================ */}

                <input type="checkbox" name="" id=""  onChange={(e)=>settnc(e.target.checked)} /><span>terms and condition</span><br /><br />
                {/* ================================================ */}
                <button type="submit">submit</button>

            </form>
            <input type="text" value={res}/>
        </div>
    )
}