import "./style.css"

export default function data(props) 
{
    console.log("--->",props);
    return(
        <div>
            <div id="c">
            <h1>hello your name is {props.array} </h1>
            <h2>email:{props.email}</h2>
            <h2>numbet:{props.number}</h2>
            <h3>address:{props.address}</h3>
            </div>
            
        </div>
    )
}



// ================================in app.js===========================================================================
// import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';

// import Click from './6.props in React/1.Props';

// function App() {
//   let [name,setData]=useState(0)
//   function click(){
//     setData(name+1)
//   }
//   return (
//     <div>
      
//       {/* <Click name={name}/> */}
//       {/* <Click name={"abhi"}/>
//       <Click name={"vivek"}/>
//       <Click name={"anil"}/>
//       <Click name={"sunil"}/>
//       // or */}  
      
//        <Click array={name}  email={"abbhi@xyz"} address={"1001"} number={name}/>
       
//        <Click array={"vivek"}  email={"vivek@xyz"} address={"1001"} number={name}/>
//        <Click array={"anil"}  email={"snil@xyz"} address={"1001"} number={name}/>
//        <Click array={"sunil"}  email={"anil@xyz"} address={"1001"} number={name}/>
//        <button onClick={()=>click()}>change</button>
//       </div>
   
//   );
// }

// export default App;