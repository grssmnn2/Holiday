import {compose, withProps, lifecycle} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import Geocode from 'react-geocode'
import React, { Component } from 'react'
import { Circle } from "react-google-maps";
//  set lat and lng 
//  every circle has the same radius etc 
//  internal code dependencies 
// import './map.css'
//  geo coding 

const markers=[{lat: -34.397, lng: 150.644},
    {lat: -35.394, lng: 150.644}, {lat: 19.8968, lng:155.5828}]

    //  testing to get lat and lng from address
    //  so this console logs it - next step -render to the screen 
    //  get input from form 
    //  pass input into that function
    //  this is HI: 21.2868645 -157.8254727
    //this is NY: 40.9949525 -72.2926543

//  refactor into function that takes an object (this would be part of the component / which would be a class component )
//  address would be from parent component / just changing this to local variable for now 
// 1 let address = this.props.address 
//  2 and also this.function as an attr somewhere 
let address = "181 Madison St, Sag Harbor, NY";
   Geocode.fromAddress(address).then(
       response => {
           const {lat, lng} = response.results[0].geometry.location;
          console.log(lat, lng);
       },
       error => {
           console.error(error);
       }
   );


const MyMapComponent = withScriptjs(withGoogleMap((props) => 
<GoogleMap 
    defaultZoom={8}
    defaultCenter={{lat: -34.297, lng: 150.644}} 
>
{markers.map(marker=> {
    return props.isMarkerShown && <Marker position={{lat: marker.lat,lng:marker.lng}} />}
)}
    </GoogleMap>
))


export default MyMapComponent