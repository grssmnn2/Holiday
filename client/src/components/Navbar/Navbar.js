import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <header className="default-header">
        <div className="menutop-wrap">
          <div className="menu-top container">
            <div className="d-flex justify-content-end align-items-center">
              <ul className="list">
                <li>
                  <a href="#">Search For A Swap</a>
                </li>
                <li>
                  <a href="#">login / register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="index.html" />
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
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#contact">Messages</a>
                </li>
                <li>
                  <a href="profile.html">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
