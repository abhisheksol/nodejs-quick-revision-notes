import { useState } from "react"
export default function Set(){
    // let [data,setdata]=useState(3)  java state use karcha garja padatya
    let data=4
    return(
        <div>
     {  
        data===3? <h1>hello it is 3</h1>:data===4? <h1>hello it is 4</h1>:<h1>this is else statement</h1>
    //  if data=3{print(.....)}          elseif data=4{print(.....)}       else:.......
     }
   </div> )
}