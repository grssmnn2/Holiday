import React, { Component } from "react";
import Chatbox from "./components/Chatbox"
import Home from "./components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom";


// import Result from "./components/pages/Result"
//  other static components go here too
import "./App.css";
import Imageuploader from "./components/Imageuploder"
import Navbar from "./components/Navbar"
import "./css/bootstrap.css"
import "./css/main.css"
class App extends Component {
  render() {
    return (
      <div>
        <Chatbox></Chatbox>

      </div>

    );
  }
}

export default App;
