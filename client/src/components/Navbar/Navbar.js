import React, { Component } from "react";
import { Link } from "react-router-dom";
import {message, Menu, Dropdown, Icon } from 'antd';
import { Rate } from 'antd';
import API from "../../utils/API"
import Billingform from "../Billingform2"
import { Modal, Button } from 'antd';
import "./Navbar.css"
const confirm = Modal.confirm;
class Navbar extends Component {
  handleChange = value => {
    this.setState({ value });
  };
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
    complete:[],
    sender:"",
    value: 3,
    review:null,
    rate:false,
    userReview:"",
    current:""
  };
  handleEdit =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitReview =()=>{
    const user=localStorage.getItem("user")
    console.log(user)
    API.addReview(this.state.sender,{review:this.state.userReview,score:this.state.value}).then(result=>{
    }).catch(err=>{
      console.log(err)
    })
    if(this.state.current===user){
      console.log(this.state.id+"first")
      API.updateRateStatus(this.state.id,{senderRated:true}).then(result=>{
        this.setState({
          open:false,
          review:true
        },()=>{
          console.log(this.state.review)
        })
      }).catch(err=>{
        console.log(err)
      })
    }else{
      console.log(this.state.id+"second")
      API.updateRateStatus(this.state.id,{receiverRated:true}).then(result=>{
        this.setState({
          open:false,
          review:true
        },()=>{
          console.log(this.state.review)
        })
      }).catch(err=>{
        console.log(err)
      })
    }
  }
  showModal = (data) => {
    console.log(data)
    
    this.setState({
      open: true,
      title:data.title,
      name:data.name,
      button:data.button,
      confirmBtn:this.state.confirmBtn===true?true:data.confirmBtn,
      id:data.id,
      sender:data.sender,
      review:this.state.review===true?true:data.review,
      current:data.current
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
      let currentUser=localStorage.getItem("user")
      console.log(this.state.sender)
      if(currentUser===this.state.sender){
      API.completeTrip(this.state.id,{senderComplete:true}).then(result=>{
        console.log(result)
        message.config({
          top: 100,
          duration: 2,
          maxCount: 3,
        });
        if(result.data.data==="completed"){
          let {upcoming}=this.state
          console.log(upcoming)
          upcoming = upcoming.filter(function( obj ) {
            console.log(obj)
            return obj.sender !== result.data.result.sender;
        });
        console.log(upcoming)
        this.setState({
          upcoming,
          complete:[...this.state.complete,result.data.result]
        })
        }
        message.success(result.data.data)
        this.setState({
          confirmBtn:true,
          open:false
          
        },()=>{
          console.log(this.state.confirmBtn)
        })
      }).catch(err=>{
        console.log(err)
      })
    }else{
      API.completeTrip(this.state.id,{receiverComplete:true}).then(result=>{
        console.log(result)
        message.config({
          top: 100,
          duration: 2,
          maxCount: 3,
        });
        if(result.data.data==="completed"){
          let {upcoming}=this.state
          console.log(upcoming)
          upcoming = upcoming.filter(function( obj ) {
            console.log(obj)
            return obj.sender !== result.data.result.sender;
        });
        console.log(upcoming)
        this.setState({
          upcoming,
          complete:[...this.state.complete,result.data.result]
        })
        }
        message.success(result.data.data)
        this.setState({
          confirmBtn:true,
          open:false
        })
      }).catch(err=>{
        console.log(err)
      })
    }
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
  reload=(result,id)=>{
    let {swapRequest}=this.state
    console.log(swapRequest)
    swapRequest = swapRequest.filter(function( obj ) {
      console.log(obj)
      return obj._id!==id;
  });
  console.log(swapRequest)
  this.setState({
    swapRequest,
    upcoming:[...this.state.upcoming,result],
    open:false
  },()=>{
    console.log(this.state.upcoming)
  })
  }
  render() {
    const {pending,swapRequest,upcoming,complete,value}=this.state
    const userName=localStorage.getItem("user")
    const menu = (
      <Menu >
        <Menu.Item style={{color:"black"}} disabled key="1">Pending Trips</Menu.Item>
        <Menu.Divider />
        {pending.map((trip,i)=>{
           return (<Menu.Item  style={{color:"grey"}}key={"pending"+i} ><a onClick={()=>this.showModal({title:"Pending Trips",name:"Please wait for "+trip.receiver+" to confirm the trip!",button:false,confirmBtn:null,id:null,sender:null,review:null,current:null})}>{trip.receiver}</a></Menu.Item>)
        })}
        <Menu.Item  style={{color:"black"}}disabled key="0">Received Swap Requests</Menu.Item>
        <Menu.Divider />
        {swapRequest.map((trip,i)=>{
           return (<Menu.Item  style={{color:"grey"}}key={"request"+i} ><a onClick={()=>this.showModal({title:"Swap Requests",name:"Please Confirm the swap request from "+trip.sender, button:true,confirmBtn:null,id:trip._id,sender:null,review:null,current:null})}>{trip.receiver}</a></Menu.Item>)
        })}
        <Menu.Item  style={{color:"black"}}disabled key="6">Upcoming Trips</Menu.Item>
        <Menu.Divider />
        {upcoming.map((trip,i)=>{
          if(trip.sender===userName){
           return (<Menu.Item  style={{color:"grey"}}key={"upcoming"+i} ><a onClick={()=>this.showModal({title:"Upcoming Trips",name:"Wait for both users to complete the trip",button:false,confirmBtn:trip.senderComplete,id:trip._id,sender:trip.sender,review:null,current:null})}>{trip.receiver}</a></Menu.Item>)
          }else{
            return (<Menu.Item  style={{color:"grey"}}key={"upcoming"+i} ><a onClick={()=>this.showModal({title:"Upcoming Trips",name:"Wait for both users to complete the trip",button:false,confirmBtn:trip.receiverComplete,id:trip._id,sender:trip.sender,review:null,current:null})}>{trip.receiver}</a></Menu.Item>)
          }
          })}
        <Menu.Item  style={{color:"black"}}disabled key="7">Complete Trips</Menu.Item>
        <Menu.Divider />
        {complete.map((trip,i)=>{
          if(trip.sender===userName){
           return (<Menu.Item style={{color:"grey"}} key={"complete"+i} ><a onClick={()=>this.showModal({title:"Complete Trips",name:this.state.review===true?"You have added reviews for "+trip.receiver:"You can add reviews for "+trip.receiver, button:false,confirmBtn:true,id:trip._id,sender:trip.receiver,review:trip.senderRated,current:trip.sender})}>{trip.receiver}</a></Menu.Item>)
        }else{
          return (<Menu.Item  style={{color:"grey"}}key={"complete"+i} ><a onClick={()=>this.showModal({title:"Complete Trips",name:this.state.review?"You have added reviews for "+trip.sender:"You can add reviews for "+trip.sender, button:false,confirmBtn:true,id:trip._id,sender:trip.sender,review:trip.receiverRated,current:trip.sender})}>{trip.receiver}</a></Menu.Item>)

        }}
      )}
      </Menu>
    );
    return (
      <header className="default-header">
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
              {this.props.authenticated ? 
                <Link to="/home">Home</Link>:<Link to="/">Home</Link>}
              {this.props.authenticated ? (
               <a onClick={this.props.click} >Messages<span style={{borderRadius: 63+"%"}}className="badge">{this.props.number}</span></a>):null}
                 {this.props.authenticated ? 
               null:<Link to="/team">Team</Link>}
              {this.props.authenticated ? (
                 <Dropdown overlay={menu}
                 onVisibleChange={this.handleVisibleChange}
                 visible={this.state.visible}
               >
                 <a className="ant-dropdown-link">
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
          {this.state.button?<Billingform refresh={(result,id)=>this.reload(result,id)}id={this.state.id}></Billingform>:null}
          {this.state.confirmBtn===false?<Button onClick={this.completeTrip} type="primary">Complete</Button>:null}
          {this.state.review===false?<div><Rate  allowHalf onChange={this.handleChange}  style={{ color: 'gold!important'}} value={value} />
                {value && <span className="ant-rate-text">{value} stars</span>}<textarea name="userReview" onChange={(e)=>this.handleEdit(e)} value={this.state.userReview} style={{display:"block", width:100+"%" }} ></textarea> <Button style={{marginTop:"5px"}}onClick={this.submitReview} type="primary" ghost>Submit Your review</Button></div>:null}
        </Modal>
      </header>
    );
  }
}

export default Navbar;
