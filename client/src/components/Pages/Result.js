import React, {Component} from "react";

//  other dependencies go here -both dynamic and static 

import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Navbar"
 
// using class method bc it's stateful 

class Result extends Component {
    state = {
        search: "",
        results: [],
        error: ""

    };

    //  lifecycle method  - when component is mounted 
    componentDidMount() {
        console.log("component loaded successfully")
    }

    //  some action is taken here 



//  methods for handling clicks/toggles/input changes 

//  start render 
//  components that are required above go here 
//  return a div that contains search results on one side and map on the other 
//  div and then a column component or something that allows to show both of those things 

render() {
    return (
        <div> 

        </div>
    )
 }

};

export default Result; 