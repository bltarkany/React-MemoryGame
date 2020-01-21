import React from "react";
import "./style.css";

// Navbar created from bootstrap styling
function Nav(props) {
    return (
        <nav className="navbar navbar-light bg-light sticky-top nav-bar">
            <span className="navbar-brand mb-0 h1">React Clicky Game</span>   
        </nav>
    );
}

export default Nav;