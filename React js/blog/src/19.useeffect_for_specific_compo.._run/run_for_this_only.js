import { useEffect, useState } from "react"

export default function Abhi() {

  

    let [count, setcount] = useState(0)
    let [count2, setcount2] = useState(0)

    useEffect(() => {
        console.log("comp1 is clicked ")
    }, [count])//===> he fakta java count component mount honcha cha adi every time chalnar

    useEffect(() => {
        console.log("comp2 is clicked ")
    }, [count2])

    return (
        <div>
            <h1>this will update compo 1= :{count}</h1>
            <br />
            <button onClick={() => setcount(count + 1)}>update</button>

            {/* ================================================================= */}
            <h2>this will update compo 1= : {count2}</h2>
            <br />
            <button onClick={() => setcount2(count2 + 1)}>update</button>
        </div>
    )

}