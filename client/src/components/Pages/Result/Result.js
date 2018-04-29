import React, { Component } from "react"

//  other dependencies go here -both dynamic and static
// import { Col, Row, Container } from "../components/Grid"
// import Card from "../components/Card"
// import SearchBox from '../../components/SearchBox'
//  import google maps  component here
import MyMapComponent from "../../components/Map/MyMapComponent"

// using class method bc it's stateful

class Result extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  }

  //  lifecylce method - axios req to DB
  //  to load search results before they
  //  are rendered to the page
  //  actually do this instead - loop thru array of lat and lng from
  // the api calls from the databse (this is in result.js)
  //  and render the markers on the screen
  componentWillMount() {
    this._loadResults()
  }

  // loadResults = () => {
  //   API.getResults()
  //     .then(res =>
  //       //  based on DB schema and state from above
  //       //  these get passed as props to the card whwere we show results
  //       this.setState({
  //         results: res.data,
  //         title: "",
  //         details: "",
  //         review: "",
  //         image: "",

  //       })
  //     )
  //     .catch(err => console.log(err))
  // }

  //  lifecycle methods  - when component is mounted
  componentDidMount() {
    console.log("component loaded successfully")
    this.loadResults()
  }

  //  methods for handling clicks/toggles/input changes
  //  i.e. it'd be nice to enlarge the photo on hover, idk
  //  start render
  //  return a div that contains search results on one side and map on the other
  //  do the array.map here 
  //    put lat and lng coordinates in array 
  //    map => on each element in that array, put a marker on the rendered map 
  //    check
  render() {
    return (
      <div>
        < MyMapComponent isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ0UrBlp4cZvjyvOfJthUB1jPyj1X4pn4&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          // {...state.results.map(result => (
          //   <Card id={result.id} key={result.id} image={result.image} />
          // ))}
        />
      </div>
    )
  }
}

export default Result
