//  external dependencies 
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

import React, { Component } from 'react'
//  code dependencies 
// import {default} from '../Pages/Result/Result';

//  actually do this instead - loop thru array of lat and lng from 
// the api calls from the databse (this is in result.js)
//  and render the markers on the screen 

const MyMapComponent = withScriptjs(withGoogleMap((props) => 
<GoogleMap 
    defaultZoom={8}
    defaultCenter={{lat: -34.297, lng: 150.644}} 
>
    {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}} />}
    </GoogleMap>
))




export default Map;