import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
    return(
        <div className="App">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </div>
    )
    
}