import React, { Component } from "react";
import Friendlist from "../../Friendlist"
import Footer from "../../Footer";
import { Modal, Button } from "antd";
import API from "../../../utils/API";
import {Rate} from "antd"
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
    isMap:true,

  };



  //  lifecycle methods

  componentDidMount() {
    this.getGeocode()
    this.displayResults(this.props.location.state.city);
    this.geocodeAddress()
   
    }

    

  getGeocode=()=>{
    if(this.state.address.city==="Chicago"){
      this.setState({
        lat:41.881832,
        lng:-87.623177,
        isMap:false
      })
    }else if(this.state.address.city==="Hawaii"){
      this.setState({
        lat:21.315603,
        lng: -157.858093,
        isMap:false
      })
    }
  }

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



  //  for whatever option they picked, set state to geo coordinates 
  //  event handler is here 

  //  handleFormSubmit = () => {

  //}
  geocodeAddress = () => {
    const google = window.google
    var geocoder = new google.maps.Geocoder()
    var latitude;
    var longitude;
    geocoder.geocode({ address: "530 S King St, Honolulu"}, (results, status)=> {
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
    const {results}=this.state
    return (
      <div>
        <Friendlist authenticated={this.props.item} email={localStorage.getItem("user")?localStorage.getItem("user"):null}></Friendlist>
        <div className="main-content" style={{ padding: "5em" }}>
          <div className="workspace">
          <div style={{marginTop:"33px"}}className="row">
          <div className="col-md-6"> 
          
          {results.map(result => {
              return (
                <div className="row1">
                <Card
                  hoverable
                  style={{ width: 200, float: "left", marginBottom: 40, height: 306, marginRight: 30 }}
                  cover={
                    <img
                    style={{height:"186px"}}
                      alt="example"
                      src={result.imageLink[0].link}
                    />
                  }
                >
                  <Meta
                    title={result.name}
                    description={
                      "city:" + result.city
                    }
                    
                  />
                  <Rate style={{marginTop:"10px"}} disabled defaultValue={Math.round(result.rating/result.numberOfRatings*2)/2} />
                </Card>
                </div>
               
              );
              
            })}
          </div>
          <div style={{minHeight:"600px"}} className="col-md-6">
          {this.state.isMap?null:<MyMapComponent isMarkerShown={true}
   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ0UrBlp4cZvjyvOfJthUB1jPyj1X4pn4&v=3.exp&libraries=geometry,drawing,places"
   loadingElement={<div style={{ height: `100%` }} />}
   containerElement={<div style={{width:`100%` ,position:"absoulte",height: `100%`, zIndex: 1 }} />}
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