import React, { Component } from "react";
// import Chatbox from "./components/Chatbox"


// import Result from "./components/Pages/Result"
//  other static components go here too
import "./App.css";
import MyMapComponent from './components/Map/MyMapComponent'
import Imageuploader from "./components/Imageuploder"
import Navbar from "./components/Navbar"
import "./App.css";
import "./css/bootstrap.css"
import "./css/main.css"
import SearchBox from './components/SearchBox'

class App extends Component {
  render() {
    return (
     <body>
      {/* <Chatbox></Chatbox>
      <Imageuploader></Imageuploader> */}
      
      <MyMapComponent isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />


      {/* <Result /> */}
        {/* <SearchBox /> */}

        

      </body>
    );
  }
}

export default App;
