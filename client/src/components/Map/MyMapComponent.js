import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import React, { Component } from "react";
import { Circle } from "react-google-maps";
const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: props.data.centerLat, lng: props.data.centerLng }}
    >
      {console.log(props.data)}
      {props.data.geoCode.map((geocode, i) => {
        return (
          <Circle
            key={i}
            onMouseMove={props.show}
            radius={200.72}
            center={{ lat: geocode.lat, lng: geocode.lng }}
          />
        );
      })}
    </GoogleMap>
  ))
);

export default MyMapComponent;
