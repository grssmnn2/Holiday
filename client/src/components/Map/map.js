//  external dependencies 
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

import React, { Component } from 'react'
//  code dependencies 
// import {default} from '../Pages/Result/Result';
// import "./Map.css"; commenting this out for now snce onload has some styles 

//  map  goes here
    //  default props (dbl check exactly how this is set up)
    //  hardcoding for Hawaii for now 
    //  chatting with teamMates 
//  we can do this 
//   we can have the address and the lat / lng attributes stored in db 
//  then we return that match 
//  then we just set state, rather than pass around props 
//  we are just returning address and pins - that's it 

const MyMapComponent = withScriptjs(withGoogleMap((props) => 
<GoogleMap 
    defaultZoom={8}
    defaultCenter={{lat: -34.297, lng: 150.644}} 
>
    {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}} />}
    </GoogleMap>
))


//  ok so the coordinates are going to be props that are passed down from the result component 
//  and they would match the location / details that are provided in the card results 
//  I'll have to check the schema for that, too see where we are storing location data 
//  map result would be called in render array.map method when the results are being rendered to the screen 
//  and how we are storing that
//  for now, can provide coordinates of Hawaii  props.lat props.lgn => where would I be finding them>
//  initially thinking it's prolly from address 
//  Js library that converts address into lat/lgn or maybe there is something easier there 

//  and also determine where this would be rendered - I believe it would in the result page component. 
//  so export here and export there? 



export default Map;