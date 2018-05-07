import React, { Component } from "react";
import Particles from 'react-particles-js';
const fiStyle={
  fontSize: "29px",
  display: "inline-block",
  width: "46px",
  height: "46px",
  lineHeight: "50px",
  textAlign: "center",
  borderRadius: "3px",
  backgroundColor:" #6195FF",
  marginRight:"3px"
}
class Team extends Component {
  render() {
    return (
      <div className="container">
        <Particles style={{position:"absolute", height: "100vh !important"}}
    params={{
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "black",
            blur: 1
          }},
          number:{
            value:50
          }
      }
    }}
    style={{
      width: '100%',
      position:"absolute"
      // backgroundImage: `url(${logo})` 
    }}
  />
  <div>
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="https://www.linkedin.com/in/cecily-grossmann/">
              <img src="./teamImage/image1.png" alt="Cecily" style={{width:"75%",height:"195px"}}/>
              </a>
              <div className="caption text-center">
                <strong>Cecily Grossmann</strong>
                <p>Developer</p>
                <a href="https://www.linkedin.com/in/cecily-grossmann/" style={fiStyle}><i style={{color:"white"}}class="fa fa-linkedin"></i></a>
                <a href="https://github.com/grssmnn2"style={fiStyle}><i style={{color:"white"}}class="fa fa-github"></i></a>
              </div>
           
          </div>
        </div>
        <div className="col-md-4">
        <div className="thumbnail">
            <a href="https://www.linkedin.com/in/nmaddenling/">
              <img src="./teamImage/image1.png" alt="Noreen" style={{width:"75%",height:"195px"}}/>
              </a>
              <div className="caption text-center">
                <strong>Noreen Madden</strong>
                <p>Developer</p>
                <a href="https://www.linkedin.com/in/nmaddenling/" style={fiStyle}><i style={{color:"white"}}class="fa fa-linkedin"></i></a>
                <a href="https://github.com/Norby257"style={fiStyle}><i style={{color:"white"}}class="fa fa-github"></i></a>
              </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="thumbnail">
            <a href="https://www.linkedin.com/in/asmishra/">
              <img src="./teamImage/image1.png" alt="Aditi" style={{width:"75%",height:"195px"}}/>
              </a>
              <div className="caption text-center">
                <strong>Aditi Mishra</strong>
                <p>Developer</p>
                <a href="https://www.linkedin.com/in/asmishra/"style={fiStyle}><i style={{color:"white"}}class="fa fa-linkedin"></i></a>
                <a href="https://github.com/asmishra17"style={fiStyle}><i style={{color:"white"}}class="fa fa-github"></i></a>
              </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        <div className="thumbnail">
            <a href="https://www.linkedin.com/in/priya-shah-192972108/">
              <img src="./teamImage/image1.png" alt="Priya Shah" style={{width:"75%",height:"195px"}}/>
              </a>
              <div className="caption text-center">
                <strong>Priya Shah</strong>
                <p>Developer</p>
                <a href="https://www.linkedin.com/in/priya-shah-192972108/"style={fiStyle}><i style={{color:"white"}}class="fa fa-linkedin"></i></a>
                <a href="https://github.com/PriyaDoIT"style={fiStyle}><i style={{color:"white"}}class="fa fa-github"></i></a>
              </div>
           
          </div>
        </div>
        <div className="col-md-4">
        <div className="thumbnail">
            <a href="https://www.linkedin.com/in/eddiezhaor/">
              <img src="./teamImage/image2.png" alt="Eddie" style={{width:"75%",height:"195px"}}/>
              </a>
              <div className="caption text-center">
                <strong>Eddie Zhao</strong>
                <p>Developer</p>
                <a href="https://www.linkedin.com/in/eddiezhaor/"style={fiStyle}><i style={{color:"white"}}class="fa fa-linkedin"></i></a>
                <a href="https://github.com/eddiezhaor"style={fiStyle}><i style={{color:"white"}}class="fa fa-github"></i></a>
              </div>
           
          </div>
        </div>
        <div className="col-md-4">
        <div className="thumbnail">
            <a href="https://www.linkedin.com/in/jennifer-white-443b3a131/">
              <img src="./teamImage/image1.png" alt="Cecily" style={{width:"75%",height:"195px"}}/>
              </a>
              <div className="caption text-center">
                <strong>Jennifer White</strong>
                <p>Developer</p>
                <a href="https://www.linkedin.com/in/jennifer-white-443b3a131/"style={fiStyle}><i style={{color:"white"}}class="fa fa-linkedin"></i></a>
                <a href="https://github.com/jennyannewhite"style={fiStyle}><i style={{color:"white"}}class="fa fa-github"></i></a>
              </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  
  

  }
  
}


export default Team;
