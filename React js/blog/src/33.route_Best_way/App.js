
import './App.css';
import Nav from "./33.route_Best_way/nav"
import Home from "./33.route_Best_way/home_page"
import About from "./33.route_Best_way//about_page"
import { Route, Routes } from "react-router-dom";

// index.js mada <BrowserRouter> <App/> <BrowserRouter/> asa wrap kala manun yata parta wrap karcha garaja nahi

function App() {


  return (
    <div className='App'>
      <Nav />
      <Routes>
        
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>page not found</h1>} />
        
        <Route />
      </Routes>

    </div>

  );

}

export default App;