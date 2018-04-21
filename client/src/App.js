import React, { Component } from "react";
import Chatbox from "./components/Chatbox"

import S3Uploader from "./components/S3Uploader"
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Result from "./components/pages/Result"
//  other static components go here too
import "./App.css";
import Imageuploader from "./components/Imageuploder"
import Navbar from "./components/Navbar"

import Home from "./components/Pages/Home"

import "./App.css";
import "./css/bootstrap.css"
import "./css/main.css"
import "./css/availability-calendar.css"
// import "./css/font-awesome.min.css"
import "./css/ion.rangeSlider.css"
// import "./css/ion.rangeSlider.skinFlat.css"
import "./css/jquerysctipttop.css"
// import "./css/linearicons.css"
import "./css/magnific-popup.css"
import "./css/nice-select.css"
// import "./css/owl.carousel.css"


class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <div>
            <Route exact path="/login" component={Home} />
          </div>
        </Router>

      </div>
     <body>
       <Home></Home>  
      {/* <Chatbox></Chatbox>
      <Imageuploader></Imageuploader> */}
      </body>

    );
  }
}

export default App;
