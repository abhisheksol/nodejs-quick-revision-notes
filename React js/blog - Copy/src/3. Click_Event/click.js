// java ami btn mada onclick mada function() cha nava dato tava ta fun btn click hona adi cha click hota 
// taya mauya ami fun pass kartna onclick mada ami paranethesis data nahi eg onclick={alert}
// onclick={alert()}  X X X error 
export default function click(){

    function send(){
        alert("ok")
     }

    return(
        <div>
            <h1>click here:</h1>
            {/* <button onclick={alert("hello")}>click</button>  ---jar directly call karcha asal tar arrow fun ni 
            karu shakto ()=>alert("hello") */}
            <button onClick ={send}>click</button>


            {/* <button onClick ={()=>send()}>click</button> --- asa pan lihiu sahakto*/}
        </div>
    )
}