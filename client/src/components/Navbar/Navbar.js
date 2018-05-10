import React, { Component } from "react";
import { Link } from "react-router-dom";
import {message, Menu, Dropdown, Icon , Badge} from 'antd';
import { Rate } from 'antd';
import API from "../../utils/API"
import Billingform from "../Billingform2"
import { Modal, Button } from 'antd';
import FaSuitcase from "react-icons/lib/fa/suitcase"
import FaAngellist from "react-icons/lib/fa/angellist"
import FaHourglass from  "react-icons/lib/fa/hourglass"
import FaSubway from "react-icons/lib/fa/subway"
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
    current:"",
    start:"",
    end:""
  };
  handleEdit =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitReview =()=>{
    const user=localStorage.getItem("user")
    console.log(user)
    API.addReview(this.state.sender,{name:user,review:this.state.userReview,score:this.state.value}).then(result=>{
    }).catch(err=>{
      console.log(err)
    })
    if(this.state.current===user){
      console.log(this.state.id+"first")
      API.updateRateStatus(this.state.id,{senderRated:true}).then(result=>{
        let completeArray=[];
        this.state.complete.forEach(element=>{
          if(element._id===this.state.id){
            element.senderRated=true
          }
          completeArray.push(element)
        })
        this.setState({
          review:true,
          open:false,
          complete:completeArray,
          userReview:""
        })
       
       
      }).catch(err=>{
        console.log(err)
      })
    }else{
      console.log(this.state.id+"second")
      API.updateRateStatus(this.state.id,{receiverRated:true}).then(result=>{
        let completeArray=[];
        this.state.complete.forEach(element=>{
          if(element._id===this.state.id){
            element.receiverRated=true
          }
          completeArray.push(element)
        })
        this.setState({
          review:true,
          open:false,
          complete:completeArray,
          userReview:""
        })
      }).catch(err=>{
        console.log(err)
      })
    }
  }
  showModal = (data) => {
    console.log(data)
    console.log(this.state)
    this.setState({
      open: true,
      title:data.title,
      name:data.name,
      button:data.button,
      confirmBtn:data.confirmBtn,
      id:data.id,
      sender:data.sender,
      review:data.review,
      current:data.current,
      start:data.start,
      end:data.end
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
  componentWillReceiveProps(nextProps){
    if(this.props.pendingTrip!==nextProps.pendingTrip){
      console.log(nextProps.pendingTrip)
      this.setState({
        pending:[...this.state.pending,nextProps.pendingTrip]
      })
    }
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
        let completeArray=[];
        this.state.upcoming.forEach(element=>{
          if(element._id===this.state.id){
            element.senderComplete=true
          }
          completeArray.push(element)
        })
        message.success(result.data.data)
        this.setState({
          confirmBtn:true,
          open:false,
          upcoming:completeArray 
        })
        if(result.data.data==="completed"){
          let {upcoming}=this.state
          console.log(upcoming)
          upcoming = upcoming.filter(function( obj ) {
            console.log(obj)
            return obj._id !== result.data.result._id;
        });
        console.log(upcoming)
        this.setState({
          upcoming,
          complete:[...this.state.complete,result.data.result]
        })
        }
    
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
            return obj._id !== result.data.result._id;
        });
        console.log(upcoming)
        this.setState({
          upcoming,
          complete:[...this.state.complete,result.data.result]
        })
        }
        let completeArray=[];
        this.state.upcoming.forEach(element=>{
          if(element._id===this.state.id){
            element.receiverComplete=true
          }
          completeArray.push(element)
        })
        message.success(result.data.data)
        this.setState({
          confirmBtn:true,
          open:false,
          upcoming:completeArray 
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
        <Menu.Item style={{color:"black",fontFamily: 'Card,serif'}} disabled key="1">Pending Trips <FaHourglass style={{fontSize:25,color:"gold"}}></FaHourglass></Menu.Item>
        <Menu.Divider />
        {pending.map((trip,i)=>{
           return (<Menu.Item  style={{color:"grey"}}key={"pending"+i} ><a onClick={()=>this.showModal({title:"Pending Trips",name:"Please wait for "+trip.receiver+" to confirm the trip!",button:false,confirmBtn:null,id:null,sender:null,review:null,current:null,start:trip.start,end:trip.end})}>{trip.receiver}</a></Menu.Item>)
        })}
        <Menu.Item  style={{color:"black",fontFamily: 'Card,serif'}}disabled key="0">Received Requests <FaSubway style={{fontSize:25,color:"gold"}}/></Menu.Item>
        <Menu.Divider />
        {swapRequest.map((trip,i)=>{
           return (<Menu.Item  style={{color:"grey"}}key={"request"+i} ><a onClick={()=>this.showModal({title:"Swap Requests",name:"Please Confirm the swap request from "+trip.sender, button:true,confirmBtn:null,id:trip._id,sender:null,review:null,current:null,start:trip.start,end:trip.end})}>{trip.sender}</a></Menu.Item>)
        })}
        <Menu.Item  style={{color:"black",fontFamily: 'Card,serif'}}disabled key="6">Upcoming Trips <FaSuitcase style={{fontSize:25,color:"gold"}}></FaSuitcase></Menu.Item>
        <Menu.Divider />
        {upcoming.map((trip,i)=>{
          if(trip.sender===userName){
           return (<Menu.Item  style={{color:"grey"}}key={"upcoming"+i} ><a onClick={()=>this.showModal({title:"Upcoming Trips",name:"Wait for both users to complete the trip",button:false,confirmBtn:trip.senderComplete,id:trip._id,sender:trip.sender,review:null,current:null,start:trip.start,end:trip.end})}>{trip.receiver}</a></Menu.Item>)
          }else{
            return (<Menu.Item  style={{color:"grey"}}key={"upcoming"+i} ><a onClick={()=>this.showModal({title:"Upcoming Trips",name:"Wait for both users to complete the trip",button:false,confirmBtn:trip.receiverComplete,id:trip._id,sender:trip.sender,review:null,current:null,start:trip.start,end:trip.end})}>{trip.sender}</a></Menu.Item>)
          }
          })}
        <Menu.Item  style={{color:"black",fontFamily: 'Card,serif'}}disabled key="7">Complete Trips <FaAngellist style={{fontSize:25,color:"gold"}}></FaAngellist></Menu.Item>
        <Menu.Divider />
        {complete.map((trip,i)=>{
          if(trip.sender===userName){
           return (<Menu.Item style={{color:"grey"}} key={"complete"+i} ><a onClick={()=>this.showModal({title:"Complete Trips",name:trip.senderRated===true?"You have added reviews for "+trip.receiver:"You can add reviews for "+trip.receiver, button:false,confirmBtn:true,id:trip._id,sender:trip.receiver,review:trip.senderRated,current:trip.sender,start:trip.start,end:trip.end})}>{trip.receiver}</a></Menu.Item>)
        }else{
          return (<Menu.Item  style={{color:"grey"}}key={"complete"+i} ><a onClick={()=>this.showModal({title:"Complete Trips",name:trip.receiverRated?"You have added reviews for "+trip.sender:"You can add reviews for "+trip.sender, button:false,confirmBtn:true,id:trip._id,sender:trip.sender,review:trip.receiverRated,current:trip.sender,start:trip.start,end:trip.end})}>{trip.sender}</a></Menu.Item>)

        }}
      )}
      </Menu>
    );
    return (
      <header className="default-header">
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" to="/index" />
            <h1 style={{color:"#ff5a5f",fontFamily: 'Pangolin,cursive'}}>Holiday</h1>
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
              <ul style={{fontFamily: 'Noto Sans,sans-serif'}} className="navbar-nav">
              {this.props.authenticated ? 
                <Link to="/home">Home</Link>:<Link to="/">Home</Link>}
              {this.props.authenticated ? (
               <a onClick={this.props.click} >Messages<Badge style={{boxShadow: '0 0 0 1px #d9d9d9 inset'}}showZero={true} count={this.props.number} /></a>):null}
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
                {this.props.authenticated ? 
                <Link to="/profile">Profile</Link>:null}
                

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
          <p style={{fontFamily: 'Asap,sans-serif'}}>Start Date:{" "+this.state.start}</p>
          <p style={{fontFamily: 'Asap,sans-serif'}}>End Date:{" "+this.state.end}</p>
          <p style={{fontFamily: 'Asap,sans-serif'}}>{this.state.name}</p>
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
