
import { Link, Route, Routes } from 'react-router-dom';
import User from "./34.dynamic routing/route"
import './App.css';


// index.js mada <BrowserRouter> <App/> <BrowserRouter/> asa wrap kala manun yata parta wrap karcha garaja nahi

function App() {

  const arr = [
    { class: "tyco", name: "abhishek", rollno: 88, divison: "cse b" },
    { class: "dsy", name: "vivek", rollno: 72, divison: "cse a" },
    { class: "fyco", name: "rakesh", rollno: 44, divison: "cse c" },
    { class: "kyco", name: "om", rollno: 15, divison: "cse d" }
]


  return (
    <div className='App'>
     { 
     arr.map((items)=>
     <h1><Link to={"/rollno/"+items.rollno+"/"+items.name}>{items.name}</Link></h1>)
     }
     <Routes>
      <Route path='/rollno/:id/:name' element={<User/>}/>
     </Routes>
    </div>

  );

}

export default App;
