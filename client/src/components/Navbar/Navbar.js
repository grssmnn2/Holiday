import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header className="default-header">
        <div className="menutop-wrap">
          <div className="menu-top container">
            <div className="d-flex justify-content-end align-items-center">
              <ul className="list">
                <li>
                  <a href="/search">Search For A Swap</a>
                </li>
                <li>
                {
          this.props.authenticated
            ? (
              <div className="pt-navbar-group pt-align-right">
                <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log Out">Log Out</Link>
              </div>
            )
            : (
              <div className="pt-navbar-group pt-align-right">
                <Link className="pt-button pt-intent-primary" to="/login">Register/Log In</Link>
              </div>
            )
        }
                </li>
              </ul>
            </div>
          </div>
        </div>

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
                <li>
                  <a href="/index">Home</a>
                </li>
                <li>
                  <a href="/chat">Messages</a>
                </li>
                <li>
                  <a href="/profile">Profile</a>
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
