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
             
                let pictures = data.results.map((pic) => {
                    return (
                        <div key={pic.external_image_url}>
                            <img src={pic.external_image_url} />
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

