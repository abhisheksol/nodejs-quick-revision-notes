export default function Sent(props) {
    const data="abhishek solapure"
    return(
        <>
        <h2>send abhishek solapure name to parent</h2>
        {/* <button onClick={props.alert}>send</button> //atemp 1 */}
        <button onClick={()=>props.alert1(data)}>send</button>
        </>
    )

}





// import logo from './logo.svg';

// import './App.css';

// import Click from './24.pure component/purecomonent';

// function App() {

//   function parent_recive(data) {
//     alert(data)
//   }

//   return (
//     <div>


//       <Click alert1={parent_recive} />        
//       {/* yatun ami fun send kartoya ani child ya function cha parameter datoya  */}

//     </div>

//   );
// }

// export default App;