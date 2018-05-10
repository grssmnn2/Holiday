import React, { Component } from "react";
import Friendlist from "../../Friendlist";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import API from "../../../utils/API";
import { Rate, Icon, Popover } from "antd";
// import './Result.css'
import MyMapComponent from "../../Map";
import { Card } from "antd";
const { Meta } = Card;

class Result extends Component {
  state = {
    results: [],
    address: {
      stateName: this.props.location.state.stateName
    },
    centerLat: "",
    centerLng: "",
    geoCode: [],
    isMap: true
  };

  //  lifecycle methods
  componentDidMount() {
    this.getGeocode();
    this.displayResults(this.props.location.state.stateName);
  }
  getGeocode = () => {
    if (this.state.address.stateName === "Illinois") {
      this.setState({
        centerLat: 41.881832,
        centerLng: -87.623177,
        isMap: false
      });
    } else if (this.state.address.stateName === "Hawaii") {
      this.setState({
        centerLat: 21.315603,
        centerLng: -157.858093,
        isMap: false
      });
    }
  };

  displayResults = stateName => {
    API.getResults(stateName)
      .then(res => {
        console.log(res);
        this.setState(
          {
            results: res.data
          },
          () => {
            this.geocodeAddress();
          }
        );
      })
      .catch(err => console.log(err));
  };

  // handleItemClick = id => {
  //   const
  // }

  //  for whatever option they picked, set state to geo coordinates
  //  event handler is here

  //  handleFormSubmit = () => {

  //}
  geocodeAddress = () => {
    const google = window.google;
    var geocoder = new google.maps.Geocoder();
    var latitude;
    var longitude;
    {
      this.state.results.map(geoloc => {
        geocoder.geocode(
          { address: geoloc.address + "," + geoloc.city },
          (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              latitude = parseFloat(results[0].geometry.location.lat());
              longitude = parseFloat(results[0].geometry.location.lng());
              console.log(latitude);
              console.log(longitude);
              this.setState(
                {
                  geoCode: [
                    ...this.state.geoCode,
                    { lat: latitude, lng: longitude }
                  ],
                  isMap: false
                },
                () => {
                  console.log(this.state.geoCode);
                }
              );
            }
          }
        );
      });
    }
  };

  render = () => {
    const { results } = this.state;
    return (
      <div>
        <Friendlist
          authenticated={this.props.item}
          email={
            localStorage.getItem("user") ? localStorage.getItem("user") : null
          }
        />
        <div className="main-content" style={{ padding: "5em" }}>
          <div className="workspace">
            <div style={{ marginTop: "33px",flexWrap:"unset"}} className="row">
              <div className="col-md-6">
                {results.map((result, i) => {
                  return (
                    <div key={i} className="row1">
                      {this.props.item ? (
                        <Link
                          to={{
                            pathname: "/property",
                            state: {
                              email: result.email,
                              userName: result.name
                            }
                          }}
                        >
                          <Card
                            hoverable
                            style={{
                              width: 200,
                              float: "left",
                              marginBottom: 40,
                              height: 305,
                              marginRight: 30
                            }}
                            cover={
                              <img
                                style={{ height: "186px" }}
                                alt="example"
                                src={result.imageLink[0].link}
                              />
                            }
                          >
                            <Meta
                              title={result.name}
                              description={"City:" + result.city}
                            />
                            <Rate
                              style={{ marginTop: "10px" }}
                              disabled
                              allowHalf
                              value={
                                Math.round(
                                  result.rating / result.numberOfRatings * 2
                                ) / 2
                              }
                            />
                          </Card>
                        </Link>
                      ) : (
                        <Card
                          hoverable
                          style={{
                            width: 200,
                            float: "left",
                            marginBottom: 40,
                            height: 305,
                            marginRight: 30
                          }}
                          cover={
                            <img
                              style={{ height: "186px" }}
                              alt="example"
                              src={result.imageLink[0].link}
                            />
                          }
                        >
                          <Meta
                            title={result.name}
                            description={"City:" + result.city}
                          />
                          <Rate
                            style={{ marginTop: "10px" }}
                            disabled
                            allowHalf
                            value={
                              Math.round(
                                result.rating / result.numberOfRatings * 2
                              ) / 2
                            }
                          />
                        </Card>
                      )}
                    </div>
                  );
                })}
              </div>
              <div style={{ minHeight: "600px" }} className="col-md-6">
                {this.state.isMap ? null : (
                  <MyMapComponent
                    isMarkerShown={true}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ0UrBlp4cZvjyvOfJthUB1jPyj1X4pn4&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={
                      <div
                        style={{
                          width: `100%`,
                          position: "absoulte",
                          height: `100%`,
                          zIndex: 1
                        }}
                      />
                    }
                    mapElement={<div style={{ height: `100%` }} />}
                    data={this.state}
                  />
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Result;
