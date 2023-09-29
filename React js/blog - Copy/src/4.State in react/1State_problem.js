
// Ya mada fakta problem define kala solution ===clicksolution.js mada ahe

export default function click() {
  
    // let data="abhishek" asa he directly varible na kam karta  pan hecha ami button var click kala var function ni 
    // change karcha bagto tava hota nahi
    let data="abhishek"
    function change(){

        let data="donkey" // he asa kam nahi karta tya sathi amala state use karva lagta 
        alert(data)
    }
    return (

        <div>
            <h1>{data}</h1>

            <button onClick ={change}>click to change name</button>

        </div>


    )
}