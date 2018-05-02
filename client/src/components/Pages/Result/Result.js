import { Card } from 'antd';
const { Meta } = Card;
import React, { Component } from "react"
import Navbar from "../../Navbar"
import Footer from "../../Footer"
import { Modal, Button } from 'antd';

//  other dependencies go here -both dynamic and static
import { Col, Row, Container } from "../components/Grid"
import API from "../../utils/API"
//  figure out exactly
import Card from "../components/Card"
//  import google maps  component here
import Map from "../components/Map"

class Result extends Component {
  state = {
    result:[]
 
  }

  //  lifecycle methods
  componentWillMount() {
    this.displayResults()
  }

  componentDidMount() {
      this.saveResults()
      this.updateResults()
  }


  //    testing with only a few for now(mainly map ones) but adding more 
//  then, have to create the route in API file (?)
//  which would include the method and also the path (?) 
//  and whatever else would go into the backend of routes 
//  this.req.params.listing.city => be

  displayResults = (city) => {
    API.getResults(city)
      .then(res => {
this.setState({
  result:res.data
})
        console.log("this.state.address", "this.state.city", "this.state.country")
      })
      .catch(err => console.log(err))
  }
  //    initial way to have someone save an apartment
//  i.e. is this the apartment that they choose 
//  then this would have to be added to  a user / customer data row? 
//  also  I think that this logic would be stored in a different file so that way it is modular 


  //    initial way to have someone favorite an apartment 

  // updateResults = () => {
  //     API.favoriteApartment(result)
  //     .then(res=>{
  //         console.log("Apartment has been favorited")
  //     }).catch(err => console.log(err));
  // }

  //  methods for handling clicks/toggles/input changes
  //  display information on click 

handleItemClick = id => {
  const 
}

//  enlarge image onhover 
//  
handleItemHover = () => {

}


  //  start render
  //  return a div that contains search results on one side and map on the other

  render() {
    const info = {
      city: "Chicago",
      state: "Illinois",
      country: "United States"
      
    }

    return (
      <div>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
      </div>
      //  testing this in the app file for now, for the first iteration
      //  array function here to cycle thru all elements that were returned
      //  map thru array that is equal to matches.length


      // <Map />
    )
  }
}

export default Result
