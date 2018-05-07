import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"
import React, { Component } from "react"
import { Circle } from "react-google-maps"

const markers = [
  { lat: -34.397, lng: 150.644 },
  { lat: -35.394, lng: 150.644 },
  { lat: 19.8968, lng: 155.5828 }
]

// const FaAnchor = require("react-icons/lib/fa/anchor")

// const google = window.google
// var geocoder = new google.maps.Geocoder()
//this.state.city  - where is this from since i get address from KS 
//  when it is string 
//  moving geocode code into component 
//  here we are refactoring this to class component 


// geocoder.geocode({ address: "Chicago"}, function(results, status) {
//   if (status == google.maps.GeocoderStatus.OK) {
//     var latitude = results[0].geometry.location.lat()
//     var longitude = results[0].geometry.location.lng()
//     console.log(latitude);
//     console.log(longitude);
//   }
// })

// at: -34.297, lng: 150.644
//  may have to make this class based 
//  going to try a couple of more things and then will try to restructure it 
//  marker.lat
const MyMapComponent = withScriptjs(
 
  withGoogleMap(props => (

   
    <GoogleMap defaultZoom={9} defaultCenter={{lat: 41.8781, lng:  -87.6298}}>

    {console.log(props)}
      {markers.map(marker => {
        {
          props.isMarkerShown && (
            <Marker position={{  lat: parseFloat(props.lat), lng: parseFloat(props.lng) }} />
          )
        }
        return (
          <Circle
            radius={8046.72}
            center={{ lat: parseFloat(props.lat), lng:parseFloat(props.lng) }}
          />
        )
      })}
    </GoogleMap>
  ))
)

export default MyMapComponent
