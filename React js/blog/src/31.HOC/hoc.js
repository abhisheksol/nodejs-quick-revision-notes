import logo from './logo.svg';

import './App.css';

// import Click from './30.uncontrolled component/form_';
import { useState } from 'react';

function App() {


    // When we want to give the different component different colours we are using the same component 
    // multiple times means when the we use the click double time means it will it will print the same 
    // component twice  so when we want one component to be red another component to
    //  be white for such multiple purposewe use hoc it is so complex process so to understand also higher order
    //  component
  return (
    <div className='App'>
      <HOC cmp={Counter}/>
      <HOCgrren cmp={Counter}/>
      <Counter/>

    </div>

  );
function HOC(props) {
  return <h2 style={{backgroundColor: "red", width:100}}><props.cmp/></h2>

  
  
}
function HOCgrren(props) {
  return <h2 style={{backgroundColor: "green", width:100}}><props.cmp/></h2>

  
}
  function Counter(){

    const [data,setdata]=useState(1) 
     return<div className='App'> 
     {/* yata return lihana important ahe */}
      <h2>the No:{data} </h2>

      <button onClick={()=>setdata(data+1)}>update</button>
     </div>
  }
}

export default App;