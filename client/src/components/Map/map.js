//  external dependencies 
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

import React, { Component } from 'react'
//  code dependencies 



const MyMapComponent = withScriptjs(withGoogleMap((props) => 
<GoogleMap 
    defaultZoom={8}
    defaultCenter={{lat: -34.297, lng: 150.644}} 
>
    {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}} />}
    </GoogleMap>
))




export default Map;