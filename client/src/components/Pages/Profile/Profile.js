import React, { Component } from "react";
import ImageUploader from "../../Imageuploader"
import { Redirect } from 'react-router-dom'
import { Alert } from 'antd';
import {Link} from "react-router-dom"
import API from "../../../utils/API"
import Friendlist from "../../Friendlist"
import "./Profile.css"
import { DatePicker,message } from 'antd';
import USstate from "./USstate.json"
const { RangePicker } = DatePicker;


class Profile extends Component {
    state = {
        name: "",
        address: "",
        country: "",
        city: "",
        state: "",
        zip: "",
        pets: "",
        bathroom: "",
        bedroom: "",
        guest: "",
        wifi: ""
    }
    componentDidMount(){
        API.retrieveUserData(localStorage.getItem("user")).then(res=>{
            console.log(res)
            this.setState ({
                name: res.data.name,
                address: res.data.address,
                country: res.data.country,
                city: res.data.city,
                state: res.data.state,
                zip: res.data.zip,
                pets: res.data.pets,
                bathroom: res.data.bathroom,
                bedroom: res.data.bedroom,
                guest: res.data.guest,
                wifi: res.data.wifi,
            })
        }).catch(err=>console.log(err))
    }
    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({
            date: dateString
        })
    }
    save = () => {
            let user = localStorage.getItem("user")
            API.updateUserData(user, this.state)
                .then(data => {
                   message.success("You have saved your changes");
                }).catch(err => console.log(err))
    }
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.name==="city"?e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1):e.target.value
        }, () => {
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
             <Friendlist authenticated={this.props.item} email={localStorage.getItem("user")?localStorage.getItem("user"):null}></Friendlist>
            <div className={this.props.Name} >
                <div className="container" style={{ paddingLeft: '65px', paddingRight: "65px", paddingTop: "100px" }}>
                    <div className="row main"></div>
                    <div className="panel-heading"></div>
                    <div className="panel-title text-center">
                        <div className="col-sm-12 control-label"> <h1 className="title"> Update Profile </h1>
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
                                        <input type="text" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.name} name="name" id="name" placeholder={this.state.name} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" className="cols-sm-2 control-label">Description of Property</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa-lg fa-user fa " aria-hidden="true"></i></span>
                                        <textarea className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.description} name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address" className="cols-sm-2 control-label">Address</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.address} name="address" id="confirm" placeholder={this.state.address} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm" className="cols-sm-2 control-label">Country</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.country} name="country" id="inputCountry" placeholder={this.state.country} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6" style={{ paddingRight: '35px' }}>
                                    <label htmlFor="city" className="cols-sm-2 control-label">City</label>
                                    <input type="text" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.city} name="city" placeholder={this.state.city} required />
                                </div>
                                <div className="form-group col-md-4" style={{ paddingRight: '35px' }}>
                                    <label htmlFor="state" className="cols-sm-2 control-label">State/Province</label>
                                    {/* <input id="inputState" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.state} name="state" placeholder={this.state.state} required /> */}
                                    <select style={{height:"34px"}}onChange={(e) => this.handleChange(e)} value={this.state.state} name="state" className="form-control">
                                                {USstate.states.map(state=>{
                                                    return <option>{state}</option>
                                                })}
                                    </select>
                                </div>
                                <div className="form-group col-md-2" style={{ paddingRight: '35px' }}>
                                    <label htmlFor="zip" className="cols-sm-2 control-label">Zip</label>
                                    <input type="text" className="form-control" onChange={(e) => this.handleChange(e)} value={this.state.zip} name="zip" id="inputZip" placeholder={this.state.zip} required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group" style={{ paddingRight: '100px' }}>
                                    <label htmlFor="confirm" className="cols-md-3 control-label"  >Number of Bathrooms</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-bath fa-lg" aria-hidden="true"></i></span>
                                            <select onChange={(e) => this.handleChange(e)} value={this.state.bathroom} name="bathroom" className="form-control">
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
                                            <select onChange={(e) => this.handleChange(e)} value={this.state.bedroom} name="bedroom" className="form-control">
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
                                            <select onChange={(e) => this.handleChange(e)} value={this.state.guest} name="guest" class="form-control">
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
                                    <label htmlFor="confirm" className="cols-md-3 control-label">Wifi?</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-wifi fa-lg" aria-hidden="true"></i></span>
                                            <select onChange={(e) => this.handleChange(e)} value={this.state.wifi} name="wifi" class="form-control">
                                                <option></option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" style={{ paddingRight: '50px' }}>
                                    <label htmlFor="confirm" className="cols-sm-3 control-label">Pets</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-bug fa-lg" aria-hidden="true"></i></span>
                                            <select name="pets" onChange={(e) => this.handleChange(e)} value={this.state.pets} className="form-control">
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
                                <div className="form-group">
                                    <label htmlFor="confirm" className="cols-sm-2 control-label">Next Available Date</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <div>
                                                <RangePicker onChange={this.onChange}  />
                                                <ImageUploader email={localStorage.getItem("user")}></ImageUploader>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group ">
                               <button type="button" onClick={this.save} className="btn btn-primary btn-lg btn-block login-button">Save Changes</button>
                            </div>

                        </form>
                    </div>
                </div >
            </div >
            </div>
        )
    }
}
export default Profile;