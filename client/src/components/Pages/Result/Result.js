import React, {Component} from "react";

//  other dependencies go here -both dynamic and static 
import React, { Component} from "react";
import { Col, Row, Container} from "../components/Grid";
import API from "../../utils/API";
//  figure out exactly 
import Card from "../components/Card";
//  import google maps  component here 

 
// using class method bc it's stateful 

class Result extends Component {
    state = {
        search: "",
        results: [],
        error: ""

    };

    componentWillMount() {
        this.displayResults();
    }

    //  lifecycle method  - when component is mounted 
    componentDidMount() {
        console.log("component loaded successfully")
        this.loadResults();

    }

    loadResults = () => {
        this.setState({
            search: search,
            results: results
        });
    };

    displayResults = () => {
       const {search, results, error} = this.state;
       API.getResults(results)
       .then(res =>{
           console.log("data req succeeded")
       }).catch(err => console.log(err))

    }

// loadResults = () => {
//     API.getResults()
//     .then(res =>
//         //  based on DB schema and state from above 
//         //  these get passed as props to the card whwere we show results 
//     this.setState({results: res.data, title:"", details:"", review:"", image:""})
// ).catch(err => console.log(err));
// };

//  methods for handling clicks/toggles/input changes 
//  i.e. it'd be nice to enlarge the photo on hover, idk

//  start render 
//  components that are required above go here 
//  return a div that contains search results on one side and map on the other 

render() {
    return (
        <div>
            render result here 
        </div>
        //  testing this in the app file for now, for the first iteration 
        //  array function here to cycle thru all elements that were returned 
        //  map thru array that is equal to matches.length 

        // <Card />

        // <Map /> 

        //  then render that map 
    );
 }

};

export default Result; 