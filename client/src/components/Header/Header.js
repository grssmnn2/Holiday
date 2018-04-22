import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  // constructor(props) {
  //   super(props)
    
  // }

  render() {
    return (
      <nav className="pt-navbar">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Holiday</div>

        </div>
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
      </nav>
    );
  }
}

export default Header;