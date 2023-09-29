import { useEffect, useState } from "react"

export default function Count() {

    useEffect(()=>{//as i said this will run before any component is load similar to componentDidMount
        alert("welcome ,as i said this will run before any component is load similar to componentDidMount")
    })
    let [data,setdata]=useState(0)
    return(
        <div>
            <h2>this is the NO. :{data}</h2>
            <button onClick={()=>setdata(data+1)}>add</button>
        </div>
    )
}

// ===============react document===================================================

// import React, { useState, useEffect } from 'react';

// export default function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }