//  external dependencies 
import {compose, withProps, lifecycle} from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

import React, { Component } from 'react'
//  code dependencies 
//  here 
//  take in physical addresses and then output markers on a map
// import './map.css'

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

// const {compose, withProps, lifecycle} = require('recompose');
// const {
//     withScriptjs,
// } = require('react-google-maps');

// const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");



// const PlacesWithStandaloneSearchBox = compose(
//     withProps({
//         // googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ0UrBlp4cZvjyvOfJthUB1jPyj1X4pn4&v=3.exp&libraries=geometry,drawing,places"
     
        
//     }),
//     lifecycle({
//         componentWillMount() {
//             const refs={}
//             this.setState({
//                 places: [],
//                 onSearchBoxMounted: ref =>  {
//                    refs.searchBox = ref;
//                 },
//                 onPlacesChanged: ()=> {
//                     const places = refs.searchBox.getPlaces();
                   
//                     this.setState({
//                         places,
//                     });
//                 },


//             })
//         },
//     }),
//     withScriptjs ) (props =>
//         <div data-standalone-searchbox="">
//         <StandaloneSearchBox
//         ref={props.onSearchBoxMounted}
//         bounds={props.bounds}
//         onPlacesChanged={props.onPlacesChanged}
//         >

//         <input 
//             type="text"
//             placeholder="Customized your placeholder"
//             style={{
//                 boxSizing: `border-box`,
//                 border: `1px solid transparent`,
//                 width: `240px`,
//                 height: `32px`,
//                 padding: `0 12px`,
//                 borderRadius: `3px`,
//                 boxShadow: `0 2px 6px rgba(0,0,0,0.3)`,
//                 fontSize: `14px`,
//                 outline: `none`,
//                 textOverflow: `ellipses`,
//             }}
//             />
//             </StandaloneSearchBox>
//             <ol>
//       {props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
//         <li key={place_id}>
//           {formatted_address}
//           {" at "}
//           ({location.lat()}, {location.lng()})
//         </li>
//       )}
//     </ol>
//   </div>
// );

// <PlacesWithStandaloneSearchBox />
// export default PlacesWithStandaloneSearchBox;
export default MyMapComponent