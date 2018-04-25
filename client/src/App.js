import React, { Component } from "react";
import Chatbox from "./components/Chatbox"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router'
import { Spinner, Card } from '@blueprintjs/core';
import Login from "./components/Login"
import Logout from "./components/Logout"
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

function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
          ? <Component {...props} {...rest} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} /> } />
  )
}

function ShowRoute({component: Component, items, param, ...rest}) {
  return (
    <Route
      {...rest}
      render={({match, ...props}) => {
        if (rest.requireAuth === true && !rest.authenticated) {
          return (
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />
          )
        }

        const item = items[match.params[param]]
        if (item) {
          return <Component item={item} {...props} match={match} {...rest}/>
        } else {
          return <h1>Not Found</h1>
        }
      }}
    />
  )
}

class App extends Component {
constructor(){
  super();
  this.state = {
    authenticated: false,
    loading: true
  }
}
componentWillMount() {
  this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        authenticated: true,
        loading: false
      })
    } else {
      this.setState({
        authenticated: false,
        loading: false
      })
    }
  })
}
componentWillUnmount() {
  this.removeAuthListener();
}

  render() {
    if (this.state.loading === true){
      return(
        <div style = {{ textAlign: "center", position: "absolute", top: "25%", left: "50%"}}>
          <h3> Loading</h3>
          <Spinner />
          </div>
      )
    }
    return (

      <div style={{maxWidth: "1160px", margin: "0 auto"}}>
        <Router>
          <div>
            <Navbar addSong={this.addSong} authenticated={this.state.authenticated} />
            <div className="main-content" style={{padding: "1em"}}>
              <div className="workspace">
                <Route exact path="/login" render={(props) => {
                  return <Login setCurrentUser={this.setCurrentUser} {...props} />
                }} />
                <Route exact path="/logout" component={Logout} />
                <Imageuploader />
            <Chatbox />
                <AuthenticatedRoute
                  exact
                  path="/chatbox"
                  authenticated={this.state.authenticated}
                  component={Card}
                  cards={this.state.card} />
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
