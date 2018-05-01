import React, {Component} from "react";

//  other dependencies go here -both dynamic and static 
import React, { Component} from "react";
import { Col, Row, Container} from "../components/Grid";
import API from "../../utils/API";
//  figure out exactly 
import Card from "../components/Card";
//  import google maps  component here 

 

class Result extends Component {
    state = { 
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        pets: "",
        bathroom: "",
        bedroom: "",
        guests: "",
        wifi: "",
        review: ""
    }

    componentWillMount() {
        this.displayResults();
    }

    componentDidMount() {

    }

    loadResults = () => {
        this.setState({
            address: listing.address,
            city: listing.city,
            state: listing.state,
            country: listing.country,
            zip: listing.zip,
            pets: listing.pets,
            bathroom: listing.bathroom,
            bedroom: listing.bedroom,
            guests: listing.guests,
            wifi: listing.wifi,
            review: listing.review
        });
    };

    displayResults = () => {
       API.getResults()
       .then(res =>{
           console.log("data req succeeded")
       }).catch(err => console.log(err))

    }

//  methods for handling clicks/toggles/input changes 
//  i.e. it'd be nice to enlarge the photo on hover, idk

//  start render 
//  components that are required above go here 
//  return a div that contains search results on one side and map on the other 

render() {
    return (
        <div>
            <Card />
        </div>
        //  testing this in the app file for now, for the first iteration 
        //  array function here to cycle thru all elements that were returned 
        //  map thru array that is equal to matches.length 

        // <Map /> 

        //  then render that map 
    );
 }

};

export default Result; 