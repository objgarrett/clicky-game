import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="">Clicky Game</a>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav"> 
            <li className="nav-item">
                <p className="score">Score: {props.score}</p>
            </li>  
        </ul>
    </div>    
  </nav>
);

export default Navbar;
