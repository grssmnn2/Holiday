import React, { Component } from "react";
import Chatbox from "./components/Chatbox"
import Imageuploader from "./components/Imageuploder"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <Chatbox></Chatbox>
      <Imageuploader></Imageuploader>
      </div>
    );
  }
}

export default App;
