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

const FaAnchor = require("react-icons/lib/fa/anchor")

const google = window.google
var geocoder = new google.maps.Geocoder()
var address = "new york"

geocoder.geocode({ address: address }, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat()
    var longitude = results[0].geometry.location.lng()
  }
})

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: -34.297, lng: 150.644 }}>
      {markers.map(marker => {
        {
          props.isMarkerShown && (
            <Marker position={{ lat: marker.lat, lng: marker.lng }} />
          )
        }
        return (
          <Circle
            radius={8046.72}
            center={{ lat: marker.lat, lng: marker.lng }}
          />
        )
      })}
    </GoogleMap>
  ))
)

export default MyMapComponent
