import React, { Component } from "react";
import Friendlist from "../../Friendlist"
import Footer from "../../Footer";
import { Modal, Button } from "antd";
import API from "../../../utils/API";
// import './Result.css'
import MyMapComponent from "../../Map";
import { Card } from "antd";
const { Meta } = Card;

class Result extends Component {
  state = {
    results: [],
    address: {
      city: this.props.location.state.city,
     
    },
    lat:"",
    lng:"",
    isMap:true
  };



  //  lifecycle methods

  componentWillMount() {
    this.geocodeAddress(this.state.address.city)
    
  }

  componentDidMount() {
    this.displayResults(this.props.location.state.city);
   
    }

    


//  res.data
  displayResults = city => {
    API.getResults(city)
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data.name
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  // handleItemClick = id => {
  //   const
  // }

  //  for whatever option they picked, set state to geo coordinates 
  //  event handler is here 

  geocodeAddress = address => {
    const google = window.google
    var geocoder = new google.maps.Geocoder()
    var latitude;
    var longitude;
    geocoder.geocode({ address: this.props.location.state.city}, (results, status)=> {
      if (status == google.maps.GeocoderStatus.OK) {
         latitude = parseFloat(results[0].geometry.location.lat())
         longitude = parseFloat(results[0].geometry.location.lng())
        console.log(latitude);
        console.log(longitude);
        this.setState({
          lat: latitude,
          lng: longitude,
          isMap:false
        },()=> {
          console.log(this.state.lat, this.state.lng)
        })
       
      }

    })


  }




  render = () => {
    const friend = [{
      name: "test3",
      city: "Chicago",
      country: "United States"
    },
    {
      name: "test4",
      city: "Chicago",
      country: "United States"
    },
    {
      name: "test5",
      city: "Chicago",
      country: "United States"
    },
    {
      name: "test6",
      city: "Chicago",
      country: "United States"
    }
  ];

    return (
      <div>
        <Friendlist authenticated={this.props.item} email={localStorage.getItem("user")?localStorage.getItem("user"):null}></Friendlist>
        <div className="main-content" style={{ padding: "5em" }}>
          <div className="workspace">
          <div className="row">
          <div className="col-md-6"> 
          
          {friend.map(result => {
              return (
                <div className="row1">
                <Card
                  hoverable
                  style={{ width: 200, float: "left", marginBottom: 40, height: 373, marginRight: 30 }}
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
                      "city:" + result.city 
                    }
                  />
                </Card>
                </div>
               
              );
              
            })}
          </div>
          <div className="col-md-6">  col 2 
          {this.state.isMap?null:<MyMapComponent isMarkerShown={true}
   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ0UrBlp4cZvjyvOfJthUB1jPyj1X4pn4&v=3.exp&libraries=geometry,drawing,places"
   loadingElement={<div style={{ height: `100%` }} />}
   containerElement={<div style={{ width:`100%` ,position:"absoulte",height: `100%`, zIndex: 1 }} />}
   mapElement={<div style={{ height: `100%` }} />}
   data={this.state}
 />} </div>
           </div>
           
          </div>
        </div>
      </div>
    );
  }

}
export default Result;