import React, { Component } from "react";
import Chatbox from "./components/Chatbox"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router'
import { Spin } from 'antd';
import { Spinner, Card } from '@blueprintjs/core';
import Login from "./components/Login"
import Logout from "./components/Logout"
import Profile from "./components/Pages/Profile"
import Home from "./components/Pages/Home"
import Properyinfor from "./components/Propertyinfor"
import Register from "./components/Pages/Register"
// import Home from "./components/Pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
// import Result from "./components/Pages/Result"
//  other static components go here too
import { app, base } from './base'
import "./App.css";
import Imageuploader from "./components/Imageuploader"
import Navbar from "./components/Navbar"
import "./css/bootstrap.css"
import "./css/main.css"
import "./css/bootstrap.css"
import "./css/main.css"
import "./css/availability-calendar.css"
import "./css/font-awesome.min.css"
import "./css/ion.rangeSlider.css"
import "./css/ion.rangeSlider.skinFlat.css"
import "./css/jquerysctipttop.css"
import "./css/linearicons.css"
import "./css/magnific-popup.css"
import "./css/nice-select.css"
import "./css/owl.carousel.css"
import { truncate } from "fs";

function AuthenticatedRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} {...rest} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
  )
}

function ShowRoute({ component: Component, items, param, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ match, ...props }) => {
        if (rest.requireAuth === true && !rest.authenticated) {
          return (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        }

        const item = items[match.params[param]]
        if (item) {
          return <Component item={item} {...props} match={match} {...rest} />
        } else {
          return <h1>Not Found</h1>
        }
      }}
    />
  )
}

class App extends Component {
  constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.state = {
      authenticated: false,
      loading: true,
      currentUser: null
    }
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
          currentUser: user
        })
      } else {
        this.setState({
          authenticated: false,
          loading: false,
          currentUser: null

        })
      }
    })
  }
  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
          <Spin size="large" />
        </div>
      )
    }
    return (

      <div>
        <Router>
          <div>
            <Navbar authenticated={this.state.authenticated} />
            <div className="main-content" style={{ padding: "5em" }}>
              <div className="workspace">
                <Route exact path="/login" render={(props) => {
                  return <Login setCurrentUser={this.setCurrentUser} {...props} />
                }} />
                <Route exact path="/logout" component={Logout} />
                {/* <Chatbox /> */}
                <AuthenticatedRoute
                  exact
                  path="/home"
                  authenticated={this.state.authenticated}
                  component={Home}
                   /> 
                  <Route exact path="/" component={Home} />
                  <Route exact path="/profile" component={Profile} />    
                  <Route exact path="/register" component={Register} />                          
                {/* <ShowRoute
                  path="/chatbox"
                  component={Chatbox}
                  authenticated={this.state.authenticated}
                  requireAuth={true}
                  param=""
                  // updateSong={this.updateSong}
                  // items={this.state.songs} 
                  /> */}
              </div>
            </div>
          </div>
        </Router>
        <Footer />

      </div>
    );
  }
}

export default App;
