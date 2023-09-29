import React from "react"
import "./css.css"

export function Home() {

    return (
        <div className="App">
            <h1>Home page</h1>
            {/* chatgpt info:=> */}
            <div>
                <h2>The Importance of E-Waste Recycling</h2>
                <p>
                    Electronic waste, or e-waste, refers to discarded electronic devices and equipment. With the rapid advancement of technology, the generation of e-waste has surged, making it essential to understand its importance. Here are some key reasons why e-waste recycling is crucial:
                </p>
                <ul>
                    <li><strong>Environmental Impact:</strong> E-waste contains hazardous materials such as lead, mercury, and cadmium that can harm the environment if not properly disposed of. Recycling helps prevent these toxins from contaminating soil and water.</li>
                    <li><strong>Resource Conservation:</strong> Electronics contain valuable materials like gold, silver, and rare metals. Recycling e-waste allows for the recovery of these resources, reducing the need for mining and preserving natural reserves.</li>
                    <li><strong>Energy Savings:</strong> Repurposing and recycling electronics consumes less energy compared to manufacturing new ones. This leads to reduced greenhouse gas emissions and energy conservation.</li>
                    <li><strong>Data Security:</strong> Proper e-waste disposal ensures the secure deletion of data from devices, protecting sensitive information from falling into the wrong hands.</li>
                    <li><strong>Legal Compliance:</strong> Many countries have implemented laws and regulations to promote e-waste recycling and proper disposal. Compliance with these regulations is essential to avoid legal consequences.</li>
                </ul>
                <p>
                    In conclusion, e-waste recycling plays a vital role in safeguarding the environment, conserving resources, and promoting sustainability. By responsibly managing our electronic devices at the end of their lifecycle, we can contribute to a greener and more sustainable future.
                </p>
            </div>

        </div>
    )
}
export function About() {

    return (
        <div className="App">
            <h1>About page</h1>
            <br />
            <br />
            <br />
            <h2>this is our about page</h2>

        </div>
    )
}

// ==============================================App.js========================================================

// import logo from './logo.svg';

// import './App.css';

// import { Home, About } from './32.routes/routes';
// import { BrowserRouter as BR, Link, Route, Routes } from 'react-router-dom';

// function App() {


//   return (
//        <div className='App'>
//          {/* BrowserRouter index.js file mada define kala ahe yata prata karcha garja nahi */}
//            <Link to="/home" style={{margin:10, textDecoration:"none",color:'red'}}>Home </Link>
//            <Link to="/about" style={{margin:20, textDecoration:"none",color:'red'}}>About </Link>
   
//            <Routes>
            
//              <Route path='/home' element={<Home/>}/>
//              <Route path='/about' element={<About/>}/>
             
//            </Routes>
        
   
//        </div>

//   );

// }
