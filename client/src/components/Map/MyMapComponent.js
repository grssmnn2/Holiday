import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"
import React, { Component } from "react"
import { Circle } from "react-google-maps"


// const FaAnchor = require("react-icons/lib/fa/anchor")
//  lat: parseFloat(props.lat), lng: parseFloat(props.lng)
//  lat: 41.8781, lng:  -87.6298
//  data.lat
const MyMapComponent = withScriptjs(
 
  withGoogleMap(props => (


   
    <GoogleMap defaultZoom={14} defaultCenter={{lat: props.data.centerLat, lng: props.data.centerLng}}>

    {console.log(props.data.lat)}
    {console.log(props.data)}
      {props.data.geoCode.map((geocode, i) => {
        return (
          <Circle 
            key={i}
            radius={200.72}
            center={{lat: geocode.lat, lng: geocode.lng}}
          />
        )
      })}
    </GoogleMap>
  ))
)

export default MyMapComponent
