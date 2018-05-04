import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import React, { Component } from 'react'
import { Circle } from "react-google-maps";
// import GoogleMapReact from 'google-map-react'


const markers=[{lat: -34.397, lng: 150.644},
    {lat: -35.394, lng: 150.644}, {lat: 19.8968, lng:155.5828}]

//  refactor into function that takes an object (this would be part of the component / which would be a class component )
//  address would be from parent component / just changing this to local variable for now 
// 1 let address = this.props.address 
//  2 and also this.function as an attr somewhere 

// let address = "181 Madison St, Sag Harbor, NY";
//    Geocode.fromAddress(address).then(
//        response => {
//            const {lat, lng} = response.results[0].geometry.location;
//           console.log(lat, lng);

//        },
//        error => {
//            console.error(error);
//        }
//    );

const google = window.google;
var geocoder = new google.maps.Geocoder();
var address = "new york";

geocoder.geocode( { 'address': address}, function(results, status) {

  if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
    alert(latitude);
  } 
}); 


//    <MyMapComponent isMarkerShown
//    googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
//    loadingElement={<div style={{ height: `100%` }} />}
//    containerElement={<div style={{ height: `400px` }} />}
//    mapElement={<div style={{ height: `100%` }} />}
//  />

const MyMapComponent = withScriptjs(withGoogleMap((props) => 
<GoogleMap 
    defaultZoom={12}
    defaultCenter={{lat: -34.297, lng: 150.644}} 
>


{markers.map(marker=> {
    //  the unit for circle.radius is meters
    //  so sh
    // return
     {props.isMarkerShown && <Marker position={{lat: marker.lat,lng:marker.lng}} />}
   return <Circle radius={8046.72}  center={{lat: marker.lat,lng:marker.lng}} />}
)}
    </GoogleMap>
))

export default MyMapComponent
