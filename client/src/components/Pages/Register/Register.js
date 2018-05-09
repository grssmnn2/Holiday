import React, { Component } from "react";
import Navbar from "../../Navbar"
import Footer from "../../Footer"
import ImageUploader from "../../Imageuploader"
import { Redirect } from 'react-router-dom'
import { Alert } from 'antd';
import API from "../../../utils/API"
import "./Register.css"
// import Imageuploder from "../../ImageUploader"
import { DatePicker } from 'antd';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
} from "react-google-maps"

const { RangePicker } = DatePicker;
const google = window.google;

let placeSearch, autocomplete;
let componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initAutocomplete () {
    // Create the autocomplete object, restricting the search to geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
    console.log("Initialialized autocomplete");
}

function fillInAddress () {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
      }
    }
    console.log("This should be filling in the address");
}

      // Bias the autocomplete object to the user's geographical location,
      // as supplied by the browser's 'navigator.geolocation' object.
function geolocate () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
        });

        console.log('Geolocate function running');
    }
}        

class Register extends Component {
    state={
       name:"",
       address:"",
       country:"",
       city:"",
       state:"",
       zip:"",
       pets:"",
       bathroom:"",
       bedroom:"",
       guest:"",
       wifi:"",
       date:[],
       done:null
    }
    onChange=(date, dateString)=> {
        console.log(date, dateString);
        this.setState({
            date:dateString
        })
    }
    save=()=>{
        let finish=true;
        Object.keys(this.state).forEach(key=>{
            if(this.state[key]===""||this.state["date"].length===0){
                finish=false;
                
            }
        })
        if(finish){
        let user=localStorage.getItem("user")
        API.updateUserData(user,this.state)
        .then(data=>{
            this.setState({
                done:true
            })
        }).catch(err=>console.log(err))
    }else{
        this.setState({
            done:false
        })
    }
    }
    handleChange=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        },()=>{
            console.log(this.state)
        })
    }

    componentDidMount = () => {
        initAutocomplete();
    }
    
    render() {
        return (
            <div className={this.props.Name} >
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ0UrBlp4cZvjyvOfJthUB1jPyj1X4pn4&libraries=places&callback=initAutocomplete"
                async defer></script>
                {this.state.done===false? <Alert message="Please fill all fields" type="error" />:null}
                {this.state.done===true?<Redirect to="/home"></Redirect>:null}
                <div className="container" style={{ paddingLeft: '65px', paddingRight:"65px" }}>
                    <div className="row main"></div>
                    <div className="panel-heading"></div>
                    <div className="panel-title text-center">
                        <div className="col-sm-12 control-label"> <h1 className="title"> Create an Account </h1>
                            <hr />
                        </div>
                    </div>
                    <div className="main-login main-center">
                        <form className="form-horizontal" method="post" action="#">
                            <div className="form-group">
                                <label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa-lg fa-user fa " aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.name}name="name" id="name" placeholder="Enter your Name" />
                                    </div>
                                </div>
                            </div>
                            <div id="locationField">
                                <input id="autocomplete" placeholder="Testing autocomplete" onFocus={geolocate()} type="text"></input>
                            </div>
                            <table id="address">
                                <tr>
                                    <td class="label">Street address</td>
                                    <td class="slimField"><input class="field" id="street_number"
                                    disabled="true"></input></td>
                                    <td class="wideField" colspan="2"><input class="field" id="route" disabled="true"></input></td>
                                </tr>
                                <tr>
                                    <td class="label">City</td>
                                    <td class="wideField" colspan="3"><input class="field" id="locality" disabled="true"></input></td>
                                </tr>
                                <tr>
                                    <td class="label">State</td>
                                    <td class="slimField"><input class="field" id="administrative_area_level_1" disabled="true"></input></td>
                                    <td class="label">Zip code</td>
                                    <td class="wideField"><input class="field" id="postal_code"
                                    disabled="true"></input></td>
                                </tr>
                                <tr>
                                    <td class="label">Country</td>
                                    <td class="wideField" colspan="3"><input class="field" id="country" disabled="true"></input></td>
                                </tr>
                            </table>
                            <div className="form-group">
                                <label htmlFor="address" className="cols-sm-2 control-label">Address</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.address}name="address" id="confirm" placeholder="Enter Your Address" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm" className="cols-sm-2 control-label">Country</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.country}name="country" id="inputCountry" placeholder="Enter Your Country" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6" style={{ paddingRight: '35px' }}>
                                    <label htmlFor="city" className="cols-sm-2 control-label">City</label>
                                    <input type="text" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.city} name="city" placeholder="Enter Your City" required />
                                </div>
                                <div className="form-group col-md-4" style={{ paddingRight: '35px' }}>
                                    <label htmlFor="state" className="cols-sm-2 control-label">State/Province</label>
                                    <input id="inputState" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.state} name="state" placeholder="Enter Your State" required />
                                </div>
                                <div className="form-group col-md-2" style={{ paddingRight: '35px' }}>
                                    <label htmlFor="zip" className="cols-sm-2 control-label">Zip</label>
                                    <input type="text" className="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.zip} name="zip"id="inputZip" placeholder="12345" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm" className="cols-sm-2 control-label">Pets</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-bug fa-lg" aria-hidden="true"></i></span>
                                        <select name="pets" onChange={(e)=>this.handleChange(e)}value={this.state.pets} className="form-control">
                                            <option></option>
                                            <option>None</option>
                                            <option>Dog</option>
                                            <option>Cat</option>
                                            <option>Small Furry</option>
                                            <option>Reptile</option>
                                            <option>Bird</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group" style={{ paddingRight: '100px' }}>
                                    <label htmlFor="confirm" className="cols-md-3 control-label"  >Number of Bathrooms</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-bath fa-lg" aria-hidden="true"></i></span>
                                            <select onChange={(e)=>this.handleChange(e)} value={this.state.bathroom}name="bathroom" className="form-control">
                                                <option></option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group" style={{ paddingRight: '100px' }}>
                                    <label htmlFor="confirm" className="cols-md-3 control-label" >Number of Bedrooms</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-bed fa-lg" aria-hidden="true"></i></span>
                                            <select onChange={(e)=>this.handleChange(e)} value={this.state.bedroom}name="bedroom"className="form-control">
                                                <option></option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group" style={{ paddingRight: '100px' }}>
                                    <label htmlFor="confirm" className="cols-md-3 control-label" >Number of Guests Possible</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-child fa-lg" aria-hidden="true"></i></span>
                                            <select onChange={(e)=>this.handleChange(e)} value={this.state.guest}name="guest"class="form-control">
                                                <option></option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirm" className="cols-md-3 control-label">Wifi?</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-wifi fa-lg" aria-hidden="true"></i></span>
                                            <select onChange={(e)=>this.handleChange(e)} value={this.state.wifi}name="wifi"class="form-control">
                                                <option></option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm" className="cols-sm-2 control-label">Dates Available</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <div>
                                                <RangePicker onChange={this.onChange} />
                                                <ImageUploader email={localStorage.getItem("user")}></ImageUploader>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               


                            </div>
                            <div className="form-group ">
                                <button type="button"  onClick={this.save} className="btn btn-primary btn-lg btn-block login-button">Register</button>
                            </div>

                        </form>
                    </div>
                </div >
            </div >

        )
    }
}
export default Register;