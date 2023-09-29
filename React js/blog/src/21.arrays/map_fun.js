// ami return() mada kadi pan for loop use karu shakta nahi manun ami 
// map function use karto 
export default function Map() {
    const arr=["abhishek","rahul","anil","raja"]
    return(
        <div>
            <h3>skjf </h3>
            {
                arr.map((items)=>
                    <h1>data are: {items}</h1>
                    
                )
            }
        </div>
    )
    
}