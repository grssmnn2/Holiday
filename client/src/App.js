import React, { Component } from "react";
import Chatbox from "./components/Chatbox"
// import Result from "./components/pages/Result"
//  other static components go here too
import "./App.css";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
      <Chatbox></Chatbox>
      <Footer />
      </div>
    );
  }
}

export default App;
