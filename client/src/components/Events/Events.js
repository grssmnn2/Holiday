import React, { Component } from "react";


class Events extends Component {
    constructor() {
        super()
        this.state = {
            pictures: []
        }
    }



    componentDidMount() {
        fetch("https://www.triposo.com/api/20180223/local_event.json?location_id=Chicago&count=3&account=2JSJ6C5C&token=77b4rd1cpzck05y81wgao0o1x54khes9")
            .then(results => {

                return results.json();
            }).then(data => {

                let pictures = data.results.map((pic, index) => {
                    return (
                        <div key={pic.external_image_url} className="col-lg-4">
                            <div className="single-property">
                                <div className="images">
                                    <img className="img-fluid mx-auto d-block" src={pic.external_image_url} alt="" />

                                </div>

                                <div className="desc">
                                    <div className="top d-flex justify-content-between">
                                        <h4><a href={pic.booking_url} target="_blank">{pic.name}</a></h4>

                                    </div>
                                    <div className="middle">
                                      {pic.description}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
                this.setState({ pictures: pictures });

            })
    }

    render() {
        return (
            <div className="container2">
                <div className="container1">

                    {this.state.pictures}

                </div>
            </div>
        )
    }

}

export default Events;

