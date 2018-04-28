import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Toaster, Intent } from '@blueprintjs/core'
import { app } from '../../base'
import Register from "../Pages/Register"
import "./login.css"
const loginStyles = {
    width: "90%",    
    margin: "130px auto",
};

class Login extends Component {
    constructor() {
        super()
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
        this.state = {
            redirect: false,
            Name:"register",
            isLogin:true

        }
    }

    authWithEmailPassword(event) {
        event.preventDefault()

        const email = this.emailInput.value
        const password = this.passwordInput.value

        app.auth().fetchProvidersForEmail(email)
            .then((providers) => {
                if (providers.length === 0) {
                    // create user 
                    // this.setState({
                    //     className:"null"
                    // })
                    this.setState({
                        isLogin:false
                    })
                    
                    return app.auth().createUserWithEmailAndPassword(email, password)
                } else {
                    // sign user in
                    return app.auth().signInWithEmailAndPassword(email, password)
                }
            })
            .then((user) => {
                if (user && user.email) {
                    this.loginForm.reset()
                    this.props.setCurrentUser(user)
                    this.setState({ redirect: true })
                }
            })
            .catch((error) => {
                this.toaster.show({ intent: Intent.DANGER, message: error.message })
            })
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const display=this.state.isLogin?<div style={loginStyles}>
                
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
    </div>:<div><Register/> <Toaster ref={(element) => { this.toaster = element }} /></div>
        if (this.state.redirect === true) {
            return <Redirect to={from} />
        }
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Login