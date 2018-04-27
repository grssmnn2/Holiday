import {compose, withProps, lifecycle} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import Geocode from 'react-geocode'
import React, { Component } from 'react'
//  internal code dependencies 
// import './map.css'
//  geo coding 

const markers=[{lat: -34.397, lng: 150.644},
    {lat: -35.394, lng: 150.644}, {lat: 19.8968, lng:155.5828}]

    //  testing to get lat and lng from address
    //  so this console logs it - next step -render to the screen 
    //  this is HI 21.2868645 -157.8254727
    //this is NY 40.9949525 -72.2926543

   Geocode.fromAddress("181 Madison St, Sag Harbor, NY").then(
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
