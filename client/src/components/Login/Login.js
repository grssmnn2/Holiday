import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Toaster, Intent } from '@blueprintjs/core'
import { app } from '../../base'
import { Alert } from 'antd';
import API from "../../utils/API"
import Register from "../Pages/Register"
import Particles from 'react-particles-js';
import "./login.css"
const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "27px",
  background:"white"
};

class Login extends Component {
  constructor(props) {
    super(props)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    this.state = {
      redirect: false,
      email:"",
      isLogin: true,
      validate:false,
      visible: false,
      hasError:false,
      error:null
    }
  }
  
  handleClose = () => {
    this.setState({ visible: false });
  }
  authWithEmailPassword(event) {
    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value
    let validate=false;
    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if (providers.length  === 0) {
          localStorage.setItem("user",email)
          this.setState({
            isLogin:false
          })
          console.log("create")
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else if (providers.indexOf("password") === -1) {
          this.toaster.show({ intent: Intent.WARNING, message: "Try alternative login." })
        }
        else {
          // sign user in
         validate=true;
        //  localStorage.setItem("user",email)
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if(!validate){
          localStorage.setItem("user",email)
          console.log(localStorage.getItem("user"))
          API.createUser({email:email}).then(user=>{
            
          }).catch(err=>console.log(err))
        }
          this.setState({
            hasError:false,
            visible: false
          })
        
         
          console.log("i go first")
          if(validate&&user&&user.email){  
            console.log(user)         // this.loginForm.reset()
            console.log(this)
              this.props.setCurrentUser(user)
              this.setState({ 
                email,
                redirect: true },()=>{
              }
            )
          }
      })
      .catch((error) => {
        console.log(error)
        if(error.message){
       this.setState({
         visible:true,
         hasError:true,
         error:error.message
       })
      }
        this.toaster.show({ intent: Intent.DANGER, message: error.message })
      })
  }
  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } }
    const display = this.state.isLogin || this.state.hasError ? <div style={loginStyles}>
      <Toaster ref={(element) => { this.toaster = element }} />
      <form onSubmit={(event) => this.authWithEmailPassword(event)}>
        <div className="pt-callout pt-icon-info-sign">
          <h5>Note</h5>
          If you don't have an account already, this form will create your account.
  </div>
        <label className="pt-label">
          Email
    <input style={{ width: "122%" }} className="pt-input" name="email" type="email" ref={(input) => { this.emailInput = input }} placeholder="Email"></input>
        </label>
        <label className="pt-label">
          Password
    <input style={{ width: "110%" }} className="pt-input" name="password" type="password" ref={(input) => { this.passwordInput = input }} placeholder="Password"></input>
        </label>
        <input style={{ marginTop:14+"px",width: "100%" }} type="submit" className="pt-button pt-intent-primary" value="Log In"></input>
      </form>
    </div> : <div><Register /> <Toaster ref={(element) => { this.toaster = element }} /></div>
    if (this.state.redirect === true) {
      console.log("redirect")
      localStorage.setItem("user",this.state.email)
      return <Redirect to={{pathname:"/home"}}/>
    }
    return (
      <div>
         <div style={{textAlign:"center"}}>
        {
          this.state.visible ? (
            <Alert
              message={this.state.error}
              type="error"
              closable
              afterClose={this.handleClose}
            />
          ) : null
        }
      </div>
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
      position:"absolute",
      zIndex:-1
      // backgroundImage: `url(${logo})` 
    }}
  />;
        {display}
      </div>
    )
  
  }
}

export default Login