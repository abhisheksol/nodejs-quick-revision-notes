import { useState } from "react"
export default function Set() {
 let [data,hidedata]=useState(false)
    return (
        <div>
            {
                data? <h1>hello abhishek!!</h1> :null
                // data? jar data true asla tar he print kar(<h1>hello abhishek!!</h1>)
                // :null----> else null print kar 

            }
            
            <button onClick={()=>hidedata(false) }>Hide</button>
            <button onClick={()=>hidedata(true) }>show</button>
            <button onClick={()=>hidedata(!data) }>toggle</button> 
            {/* !data=jar true asla tar false hotya jar false asla tar true (vice-versa)  */}
        </div>
    )
}