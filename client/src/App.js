import React, { Component } from "react";
import Chatbox from "./components/Chatbox"
import S3Uploader from "./components/S3Uploader"
import Home from "./components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/login" component={Home} />
          </div>
        </Router>
        {/* <Chatbox></Chatbox>
        <S3Uploader></S3Uploader> */}
      </div>
    );
  }
}

export default App;
