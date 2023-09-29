import React from "react"

export default function Hooks() {

    React.useEffect(()=>{ //this will run before componet runs"
        alert("this will run before componet runs")//as i said this will run before any component is load similar to componentDidMount
    })
    return(
        <div>
            <p>this useeffect is same as componentDidMount  </p>
        </div>
    )
    
}