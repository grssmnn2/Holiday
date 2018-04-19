import React, { Component } from "react";
import Chatbox from "./components/Chatbox"
import S3Uploader from "./components/S3Uploader"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <Chatbox></Chatbox>
      <S3Uploader></S3Uploader>
      </div>
    );
  }
}

export default App;
