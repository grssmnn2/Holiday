import React, { Component } from "react";


class Events extends Component {
    constructor() {
        super()
        this.state = {
            pictures: []
        }
    }



    componentDidMount() {
        let num=Math.floor(Math.random()*2)
        const location=["Chicago","Honolulu"];
        fetch(`https://www.triposo.com/api/20180223/local_event.json?location_id=${location[num]}&count=12&account=2JSJ6C5C&token=77b4rd1cpzck05y81wgao0o1x54khes9`)
            .then(results => {
                return results.json();
            }).then(data => {
                 console.log(data)
                let newArry=data.results
                var elements = newArry.reduce(function(previous, current) {

                    var object = previous.filter(object => object.name === current.name);
                    if (object.length == 0) {
                      previous.push(current);
                    }
                    return previous;
                  }, [])
                  elements=elements.slice(0,6)
                let pictures = elements.map((pic, index) => {
                    return (
                        <div key={pic.external_image_url} className="col-lg-4">
                            <div style={{height:"365px",marginTop:"10px"}}className="single-property">
                                <div className="images">
                                    <img style={{width:"280px",height:"200px"}}className="img-fluid mx-auto d-block" src={pic.external_image_url} alt="" />

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

