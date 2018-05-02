import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Toaster, Intent } from '@blueprintjs/core'
import { app } from '../../base'
import Register from "../Pages/Register"
import "./login.css"
const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

class Login extends Component {
  constructor(props) {
    super(props)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    this.state = {
      redirect: false,
      email:"",
      isLogin: true,
      validate:false

    }
  }

  authWithEmailPassword(event) {
    event.preventDefault()

    const email = this.emailInput.value
    const password = this.passwordInput.value
    let validate=false;
    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if (providers.length  === 0) {
          this.setState({
            isLogin:false
          })
          return app.auth().createUserWithEmailAndPassword(email, password)
        } else {
          // sign user in
         validate=true;

          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
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
        this.toaster.show({ intent: Intent.DANGER, message: error.message })
      })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const display = this.state.isLogin ? <div style={loginStyles}>
      <Toaster ref={(element) => { this.toaster = element }} />
      <form onSubmit={(event) => this.authWithEmailPassword(event)}>
        <div className="pt-callout pt-icon-info-sign">
          <h5>Note</h5>
          If you don't have an account already, this form will create your account.
  </div>
        <label className="pt-label">
          Email
    <input style={{ width: "100%" }} className="pt-input" name="email" type="email" ref={(input) => { this.emailInput = input }} placeholder="Email"></input>
        </label>
        <label className="pt-label">
          Password
    <input style={{ width: "100%" }} className="pt-input" name="password" type="password" ref={(input) => { this.passwordInput = input }} placeholder="Password"></input>
        </label>
        <input style={{ width: "100%" }} type="submit" className="pt-button pt-intent-primary" value="Log In"></input>
      </form>
    </div> : <div><Register /> <Toaster ref={(element) => { this.toaster = element }} /></div>
    if (this.state.redirect === true) {
      console.log("redirect")
      return <Redirect to={{pathname:"/home",state:{email:this.state.email}}}/>
    }
    return (
      <div>
        {display}
      </div>
    )
  
  }
}

export default Login