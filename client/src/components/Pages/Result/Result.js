import React, { Component } from "react";
import Friendlist from "../../Friendlist"
import Footer from "../../Footer";
import { Modal, Button } from "antd";
import API from "../../../utils/API";

import MyMapComponent from "../../Map";
import { Card } from "antd";
const { Meta } = Card;
class Result extends Component {
  state = {
    results: []
  };

  //  lifecycle methods

  componentDidMount() {
    this.displayResults(this.props.location.state.city);
  }

  //  this.req.params.listing.city => be

  displayResults = city => {
    API.getResults(city)
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data
        });
        console.log(
          "this.state.address",
          "this.state.city",
          "this.state.country"
        );
      })
      .catch(err => console.log(err));
  };

  // handleItemClick = id => {
  //   const
  // }

  //  enlarge image onhover
  // //
  // handleItemHover = () => {

  // }

  //  start render
  //  return a div that contains search results on one side and map on the other
  //  actually that would need to be two divs / floated 


  render() {
    const info = {
      city: "Chicago",
      state: "Illinois",
      country: "United States"
    };

    return (
      <div>
        <Friendlist authenticated={this.props.item} email={localStorage.getItem("user")?localStorage.getItem("user"):null}></Friendlist>
        <div className="main-content" style={{ padding: "5em" }}>
          <div className="workspace">
            {this.state.results.map(result => {
              return (
                <Card
                  hoverable
                  style={{ width: 240, float: "left", marginBottom: 40 }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title={result.name}
                    description={
                      "city:" + result.city + " State:" + result.state
                    }
                  />
                </Card>
              );
            })}
            <MyMapComponent isMarkerShown
   googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
   loadingElement={<div style={{ height: `100%` }} />}
   containerElement={<div style={{ height: `400px` }} />}
   mapElement={<div style={{ height: `100%` }} />}
 />
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
