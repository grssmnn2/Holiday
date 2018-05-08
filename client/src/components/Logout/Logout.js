import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Spin } from 'antd';

import { app } from '../../base'

class Logout extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    }
  }

  componentWillMount() {
    app.auth().signOut().then((user) => {
      this.setState({ redirect: true })
    })
  }

  render() {
    if (this.state.redirect === true) {
      localStorage.removeItem("user");
      return <Redirect to="/" />
    }

    return (
      <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
        <h3>Logging Out</h3>
        <Spin size="large" />
      </div>
    )
  }
}

export default Logout