import React, { Component } from "react";
import Navbar from "../../Navbar"
import Footer from "../../Footer"
import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }
    render() {
        const { profile } = this.state;
        return ( <
            div className = "container" >
            <
            div className = "profile-area" >
            <
            h1 > { profile.name } < /h1> <
            Panel header = "Profile" >
            <
            img src = { profile.picture }
            alt = "profile" / >
            <
            div >
            <
            ControlLabel > < Glyphicon glyph = "user" / > Nickname < /ControlLabel> <
            h3 > { profile.nickname } < /h3> <
            /div> <
            pre > { JSON.stringify(profile, null, 2) } < /pre> <
            /Panel> <
            /div> <
            /div>
        );
    }
}

export default Profile;

class Profile extends Component {
    render() {
        return ( <
            div >


            <
            div className = "container pt-30" >                  < div className = "row height align-items-center justify-content-center" >                      < div className = "col-lg-10" >                          < div className = "generic-banner-content" >                                  < h2 className = "text-white text-center" > Welcome back! < /h2>                                 < p className = "text-white" > Manage your saved homes and view your messages here. < /p>                         < /div>                                               < /div>                 < /div>             < /div>



            <
            /div >

        )
    }
}

export default Profile;