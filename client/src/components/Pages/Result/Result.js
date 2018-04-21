import React, {Component} from "react";

//  other dependencies go here -both dynamic and static 
import React, { Component} from "react";
import { Col, Row, Container} from "../components/Grid"

//  import google maps 

 
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
        this.loadResults();

    }

loadResults = () => {
    API.getResults()
    .then(res =>
        //  based on DB schema and state from above 
    this.setState({results: res.data, title:"", details:"", review:""})
).catch(err => console.log(err));
};

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