import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header className="default-header">
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" to="/index" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                
                  <Link to="/">Home</Link>
                
                
                  <Link to="/chLinkt">Messages</Link>
                
                
                  <Link to="/profile">Profile</Link>
                

                  {this.props.authenticated
                  ? (
                <Link to="/logout" >Log Out</Link>
            )
            : (
                <Link to="/login">Login/Register</Link>
            )
        }       
                
               
                
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
