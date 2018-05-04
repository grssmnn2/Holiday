import React, { Component } from "react";
import { Link } from "react-router-dom";
import {message, Menu, Dropdown, Icon } from 'antd';
import API from "../../utils/API"
import Billingform from "../Billingform2"
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;
class Navbar extends Component {
  state = {
    visible: false,
    open:false,
    title:"",
    name:"",
    button:false,
    confirmBtn:false,
    id:"",
    pending:[],
    swapRequest:[],
    upcoming:[],
    complete:[]
  };
  showModal = (data) => {
    console.log(data)
    this.setState({
      open: true,
      title:data.title,
      name:data.name,
      button:data.button,
      confirmBtn:data.confirmBtn,
      id:data.id
    });
  }
  handleOk = (e) => {
    this.setState({
      open: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      open: false,
    });
  }
  componentDidMount(){
    this.showTripDetails()
  }
  showTripDetails=()=>{
      if(this.props.authenticated){
        API.retrievePendingTrips(localStorage.getItem("user")).then(result=>{
          console.log(result)
          this.setState({
            pending:result.data
          })
        }).catch(err=>console.log(err))
        API.retreiveSwapRequests(localStorage.getItem("user")).then(result=>{
          console.log(result)
          this.setState({
            swapRequest:result.data
          })
        }).catch(err=>console.log(err))
        API.retrieveUpcomingTrips(localStorage.getItem("user")).then(result=>{
          this.setState({
            upcoming:result.data
          })
        }).catch(err=>console.log(err))
        API.retrieveCompleteTrips(localStorage.getItem("user")).then(result=>{
          this.setState({
            complete:result.data
          })
        }).catch(err=>console.log(err))
      }
  }
  completeTrip=()=>{
    const cb=()=>{
      API.completeTrip(this.state.id).then(result=>{
        message.config({
          top: 100,
          duration: 2,
          maxCount: 3,
        });
        message.success("You have completed a trip!")
        this.setState({
          open:false
        })
      }).catch(err=>{
        console.log(err)
      })
    }
    confirm({
      title: 'Do you Want to complete the trip?',
      content: '',
      onOk() {
        cb()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
    
  }
  handleVisibleChange = (flag) => {
    console.log("hello")
    this.setState({ visible: flag });
  }
  render() {
    const {pending,swapRequest,upcoming,complete}=this.state
    const menu = (
      <Menu >
        <Menu.Item style={{color:"gold"}} disabled key="1">Pending Trips</Menu.Item>
        <Menu.Divider />
        {pending.map((trip,i)=>{
           return (<Menu.Item  key={"pending"+i} ><a onClick={()=>this.showModal({title:"Pending Trips",name:"Please wait for "+trip.receiver+" to confirm the trip!",button:false,confirmBtn:false,id:null})}>{trip.receiver}</a></Menu.Item>)
        })}
        <Menu.Item  style={{color:"gold"}}disabled key="0">Received Swap Requests</Menu.Item>
        <Menu.Divider />
        {swapRequest.map((trip,i)=>{
           return (<Menu.Item  key={"request"+i} ><a onClick={()=>this.showModal({title:"Swap Requests",name:"Please Confirm the swap request from "+trip.sender, button:true,confirmBtn:false,id:null})}>{trip.receiver}</a></Menu.Item>)
        })}
        <Menu.Item  style={{color:"gold"}}disabled key="6">Upcoming Trips</Menu.Item>
        <Menu.Divider />
        {upcoming.map((trip,i)=>{
           return (<Menu.Item  key={"upcoming"+i} ><a onClick={()=>this.showModal({title:"Upcoming Trips",name:"Please click to complete your swap trip ",button:false,confirmBtn:true,id:trip._id})}>{trip.receiver}</a></Menu.Item>)
        })}
        <Menu.Item  style={{color:"gold"}}disabled key="7">Complete Trips</Menu.Item>
        <Menu.Divider />
        {complete.map((trip,i)=>{
           return (<Menu.Item  key={"complete"+i} ><a onClick={()=>this.showModal({title:"Complete Trips",name:"Please Confirm the swap request from "+trip.sender, button:false,confirmBtn:false,id:null})}>{trip.receiver}</a></Menu.Item>)
        })}


      </Menu>
    );
    return (
      <header className="default-header">
        {/* <div className="menutop-wrap">
          <div className="menu-top container">
            <div className="d-flex justify-content-end align-items-center">
              <ul className="list">
                <li>
                  <a href="/search">Search For A Swap</a>
                </li>
                <li>
                {
          this.props.authenticated
            ? (
              <div className="pt-navbar-group pt-align-right">
                <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log Out">Log Out</Link>
              </div>
            )
            : (
              <div className="pt-navbar-group pt-align-right">
                <Link className="pt-button pt-intent-primary" to="/login">Register/Log In</Link>
              </div>
            )
        }
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" to="/index" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <Link to="/">Home</Link>
              {this.props.authenticated ? (
               <a onClick={this.props.click} >Messages</a>):null}
              {this.props.authenticated ? (
                 <Dropdown overlay={menu}
                 onVisibleChange={this.handleVisibleChange}
                 visible={this.state.visible}
               >
                 <a className="ant-dropdown-link" href="#">
                   Trips <Icon type="down" />
                 </a>
               </Dropdown>
              ):null}
                <Link to="/profile">Profile</Link>

                {this.props.authenticated ? (
                  
                  <Link to="/logout">Log Out</Link>
                ) : (
                  <Link to="/login">Register/Log In</Link>
                )}

              </ul>
            </div>
          </div>
        </nav>
        <div>
      </div>
      <Modal
          title={this.state.title}
          visible={this.state.open}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Start Date:</p>
          <p>End Date:</p>
          <p>{this.state.name}</p>
          {this.state.button?<Billingform></Billingform>:null}
          {this.state.confirmBtn?<Button onClick={this.completeTrip} type="primary">Complete</Button>:null}
        </Modal>
      </header>
    );
  }
}

export default Navbar;
