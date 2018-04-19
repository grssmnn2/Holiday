import React from "react";

// import {Link} from "react-router-dom";

// import "./Navbar.css"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
    <div classNAme="container">
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
            <li><a href="#">Search For A Swap</a></li>
                    <li><a href="#">login / register</a></li>            
            </ul>
          </div>						
    </div>
</nav>
)

export default Navbar;

// 
