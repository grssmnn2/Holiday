import React, { Component } from "react";
import Friendlist from "../../Friendlist"
import Footer from "../../Footer";
import { Modal, Button } from "antd";
import API from "../../../utils/API";

import Map from "../../Map";
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
                  style={{ width: 240, float: "left" }}
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
            {/* <Map /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
