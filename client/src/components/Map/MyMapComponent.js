//  external dependencies 
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

import React, { Component } from 'react'
//  code dependencies 
//  here 
//  take in physical addresses and then output markers on a map
import './map.css'

//  dummy data for now 


const markers=[{lat: -34.397, lng: 150.644},
    {lat: -35.394, lng: 150.644}, {lat: 19.8968, lng:155.5828}]
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




export default MyMapComponent;