import React, {Component} from "react";

//  other dependencies go here -both dynamic and static 
 
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

render() {
    return (
        <div> 

        </div>
    )
 }

};

export default Result; 