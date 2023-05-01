import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="nav">
            
            <a href><NavLink to="/apply">Apply Here</NavLink></a>
            <a href><NavLink to="/about">About</NavLink></a>
            <a href><NavLink to="/home">Home</NavLink></a>
        </nav>
    )
}

export default NavBar;