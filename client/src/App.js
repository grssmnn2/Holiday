import React, { Component } from "react";
import Chatbox from "./components/Chatbox"
<<<<<<< HEAD
import S3Uploader from "./components/S3Uploader"
import Home from "./components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom";


=======


// import Result from "./components/pages/Result"
//  other static components go here too
import "./App.css";




import Imageuploader from "./components/Imageuploder"
import Navbar from "./components/Navbar"
>>>>>>> master
import "./App.css";
import "./css/bootstrap.css"
import "./css/main.css"

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Router>
          <div>
            <Route exact path="/login" component={Home} />
          </div>
        </Router>

      </div>
=======
     <body>
      {/* <Chatbox></Chatbox>
      <Imageuploader></Imageuploader> */}
      </body>
>>>>>>> master
    );
  }
}

export default App;
