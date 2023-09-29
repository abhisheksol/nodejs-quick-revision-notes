import { useState } from "react"
import "./css.css"
export default function Abhi(props) {

    const [rollnos,setrollno]=useState(props.rollno)
    return(
        <div>
        <div className="box">
            <h2>ur name is :{props.name}</h2>
            <h2>ur class is :{props.class}</h2>
            <h2>ur email is :{props.email}</h2>
            <h2>ur roll no is:{rollnos}</h2>
            
        </div>
        <button onClick={()=>{setrollno(rollnos+1)}}>send</button>
        </div>

    )
    
}



// import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';

// import Click from './16.longday/props';

// function App() {
 
//   return (
//     <div>

//       <Click name={"abhishek"}class={"CSE b"}email={"abhisheksolapure@2003gmail.com"}rollno={72}/>
//       <Click name={"abhishek"}class={"CSE b"}email={"abhisheksolapure@2003gmail.com"}rollno={72}/>
//       <Click name={"abhishek"}class={"CSE b"}email={"abhisheksolapure@2003gmail.com"}rollno={72}/>
//       {/* <Click data={["kick me out"," abhi"]}
//               name="abhishek"/>
//        */}
//       </div>
   
//   );
// }

// export default App;
