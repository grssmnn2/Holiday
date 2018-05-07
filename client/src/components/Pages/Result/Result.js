import React, { Component } from "react";
import Friendlist from "../../Friendlist"
import Footer from "../../Footer";
import { Modal, Button } from "antd";
import API from "../../../utils/API";

import MyMapComponent from "../../Map";
import { Card } from "antd";
const { Meta } = Card;
//  we can access the address using this.state.address 
//  pass this into the geo coding?  - and putting the geo coding
//  examples of passing state 

class Result extends Component {
  state = {
    results: [],
    address: {
      city: "chicago",
      state: "illinois",
      country: "USA",
      lat: 41.8781,
      lng: -87.6298
    }
  };



  //  lifecycle methods


  componentDidMount() {
    this.displayResults(this.props.location.state.city);
    // setMapElementReference = function(MapElementReference) {
    //  this.mapElement = MapElementReference;
    }


  //  this.req.params.listing.city => be

  displayResults = city => {
    API.getResults(city)
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data
        });
        
      })
      .catch(err => console.log(err));
  };

  // handleItemClick = id => {
  //   const
  // }

  //  enlarge image onhover
  // //
  // handleItemHover = () => {

  // }

  //  for whatever option they picked, set state to geo coordinates 
  //  handleFormSubmit = () => {

  //}
  geocodeAddress = address => {
    const google = window.google
    var geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({ address: "this.state.city"}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = parseFloat(results[0].geometry.location.lat())
        var longitude = parseFloat(results[0].geometry.location.lng())
        console.log(latitude);
        console.log(longitude);
        this.setState({
          lat: latitude,
          lng: longitude 
        })
      }
    })

  }




  render = () => {
    // const info = {
    //   city: "Chicago",
    //   state: "Illinois",
    //   country: "United States"
    // };

    return (
      <div>
        <Friendlist authenticated={this.props.item} email={localStorage.getItem("user")?localStorage.getItem("user"):null}></Friendlist>
        <div className="main-content" style={{ padding: "5em" }}>
          <div className="workspace">
            {this.state.results.map(result => {
              return (
                <Card
                  hoverable
                  style={{ width: 240, float: "left", marginBottom: 40, height: 373, marginRight: 30 }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title={result.name}
                    description={
                      "city:" + result.city + " State:" + result.state
                    }
                  />
                </Card>
              );
            })}
            <MyMapComponent isMarkerShown={true}
   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ0UrBlp4cZvjyvOfJthUB1jPyj1X4pn4&v=3.exp&libraries=geometry,drawing,places"
   loadingElement={<div style={{ height: `100%` }} />}
   containerElement={<div style={{ height: `373px` }} />}
   mapElement={<div style={{ height: `100%` }} />}
   data={this.state.address}
 />
          </div>
        </div>
      </div>
    );
  }
// }
}
export default Result;