import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"
import React, { Component } from "react"
import { Circle } from "react-google-maps"


// const FaAnchor = require("react-icons/lib/fa/anchor")
const markers = [
  { lat: -34.397, lng: 150.644 },
  { lat: -35.394, lng: 150.644 },
  { lat: 19.8968, lng: 155.5828 }
]

//  lat: parseFloat(props.lat), lng: parseFloat(props.lng)
//  lat: 41.8781, lng:  -87.6298
//  data.lat
const MyMapComponent = withScriptjs(
 
  withGoogleMap(props => (


   
    <GoogleMap defaultZoom={9} defaultCenter={{lat: props.data.lat, lng: props.data.lng}}>

    {console.log(props)}

      {markers.map(marker => {
        {
          props.isMarkerShown && (
            <Marker position={{lat: props.data.lat, lng: props.data.lng}} />
          )
        }
        return (
          <Circle
            radius={8046.72}
            center={{lat: props.data.lat, lng: props.data.lng}}
          />
        )
      })}
    </GoogleMap>
  ))
)

export default MyMapComponent
