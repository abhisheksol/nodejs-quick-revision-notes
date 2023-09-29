
import  {useState} from 'react'
function Set(){
 const [data, setData] = useState("abhishek"); 
//useState kay sangata ki set karna adi default kahi tavcha ahe ka 
// ani setData event la kay set karcha ta set karta

function change(){
    setData("abhi!!!")
}
    return(
        <div>
            <h1>{data}</h1>
            <button onClick ={change}>click</button>
        </div>
    )
}
export default Set;


