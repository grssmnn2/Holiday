import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <header class="default-header">
        <div class="menutop-wrap">
          <div class="menu-top container">
            <div class="d-flex justify-content-end align-items-center">
              <ul class="list">
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

        <nav class="navbar navbar-expand-lg  navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="index.html" />
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div
              class="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
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
