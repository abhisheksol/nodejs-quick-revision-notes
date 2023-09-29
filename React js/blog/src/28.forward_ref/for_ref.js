import { forwardRef } from "react"
function Recieve(props,ref) {

    return(
        <div className="App">
            <input type="text" ref={ref}/>
        </div>
    )
}
export default forwardRef(Recieve)



// ======================================================================================================================


// import logo from './logo.svg';

// import './App.css';

// import Click from './28.forward_ref/for_ref';
// import { Button } from 'react-bootstrap';
// import { useRef } from 'react';

// function App() {

//   const inputref=useRef(null)
//   function send() {
//       inputref.current.value="abhishek"
//   }
//   return (
//     <div className='App'>


//       <Click ref={inputref}/>
//       <Button onClick={send} >sent</Button>

//     </div>

//   );
// }

// export default App;
