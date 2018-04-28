import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../Navbar"
import Footer from "../../Footer"
// import Imageuploader from "../../ImageUploader"
class Register extends Component {
    render() {
        return ( <
            div > { /* <Navbar/> */ }

            <
            div className = "container"
            style = {
                { padding: '130px' } } >
            <
            div className = "row main" > < /div> <
            div className = "panel-heading" > < /div> <
            div className = "panel-title text-center" >
            <
            div className = "col-sm-12 control-label" > < h1 className = "title" > Create an Account < /h1> <
            hr / >
            <
            /div> <
            /div> <
            div className = "main-login main-center" >
            <
            form className = "form-horizontal"
            method = "post"
            action = "#" >
            <
            div className = "form-group" >
            <
            label
            for = "name"
            className = "cols-sm-2 control-label" > Your Name < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-user fa"
            aria - hidden = "true" > < /i></span >
            <
            input type = "text"
            className = "form-control"
            name = "name"
            id = "name"
            placeholder = "Enter your Name" / >
            <
            /div> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "email"
            className = "cols-sm-2 control-label" > Your Email < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-envelope fa"
            aria - hidden = "true" > < /i></span >
            <
            input type = "text"
            className = "form-control"
            name = "email"
            id = "email"
            placeholder = "Enter your Email" / >
            <
            /div> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "password"
            className = "cols-sm-2 control-label" > Password < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-lock fa-lg"
            aria - hidden = "true" > < /i></span >
            <
            input type = "password"
            className = "form-control"
            name = "password"
            id = "password"
            placeholder = "Enter your Password" / >
            <
            /div> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > Confirm Password < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-lock fa-lg"
            aria - hidden = "true" > < /i></span >
            <
            input type = "password"
            className = "form-control"
            name = "confirm"
            id = "confirm"
            placeholder = "Confirm your Password" / >
            <
            /div> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > Address < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-lock fa-lg"
            aria - hidden = "true" > < /i></span >
            <
            input type = "address"
            className = "form-control"
            name = "confirm"
            id = "confirm"
            placeholder = "Enter Your Address" / >
            <
            /div> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > Address 2 < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-lock fa-lg"
            aria - hidden = "true" > < /i></span >
            <
            input type = "address"
            className = "form-control"
            name = "confirm"
            id = "inputAddress2"
            placeholder = "Apartment, studio, or floor" / >
            <
            /div> <
            /div> <
            /div> <
            div className = "form-row" >
            <
            div className = "form-group col-md-6"
            style = {
                { paddingRight: '35px' } } >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > City < /label> <
            input type = "text"
            className = "form-control"
            name = "confirm"
            placeholder = "San Diego"
            required / >
            <
            /div> <
            div className = "form-group col-md-4"
            style = {
                { paddingRight: '35px' } } >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > State < /label> <
            input id = "inputState"
            className = "form-control"
            name = "confirm"
            placeholder = "California"
            required / >
            <
            /div> <
            div className = "form-group col-md-2"
            style = {
                { paddingRight: '35px' } } >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > Zip < /label> <
            input type = "text"
            className = "form-control"
            id = "inputZip"
            placeholder = "12345"
            required / >
            <
            /div> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > Pets < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-bug fa-lg"
            aria - hidden = "true" > < /i></span >
            <
            select className = "form-control" >
            <
            option > None < /option> <
            option > Dog < /option> <
            option > Cat < /option> <
            option > Small Furry < /option> <
            option > Reptile < /option> <
            option > Bird < /option> <
            /select> <
            /div> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > Number of Bathrooms < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-bath fa-lg"
            aria - hidden = "true" > < /i></span >
            <
            select class = "form-control" >
            <
            option > 0 < /option> <
            option > 1 < /option> <
            option > 2 < /option> <
            option > 3 + < /option> <
            /select> <
            /div> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            label
            for = "confirm"
            className = "cols-sm-2 control-label" > Wifi ? < /label> <
            div className = "cols-sm-10" >
            <
            div className = "input-group" >
            <
            span className = "input-group-addon" > < i className = "fa fa-wifi fa-lg"
            aria - hidden = "true" > < /i></span >
            <
            select class = "form-control" >
            <
            option > Yes < /option> <
            option > No < /option> <
            /select> <
            /div> <
            /div> <
            /div>

            { /* <Imageuploader/> */ } <
            div className = "form-group " >
            <
            button type = "button"
            className = "btn btn-primary btn-lg btn-block login-button" > Register < /button> <
            /div>

            <
            /form> <
            /div> <
            /div > <
            Footer / >
            <
            /div >

        )
    }
}
export default Register;