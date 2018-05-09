import React, { Component } from "react";
import io from "socket.io-client";
import API from "../../utils/API";
import { Avatar, notification } from 'antd';
import IoAndroidCall from "react-icons/lib/io/android-call";
import IoClose from "react-icons/lib/io/close"
import MdVideoCall from "react-icons/lib/md/video-call"
import 'antd/dist/antd.css';
import "./Chatbox.css";
class Chatbox extends Component {
  state = {
    sender:"",
    message: "",
    messages:[],
    socket: null,
    receiver:"",
    className:"hide",
    isOpen:false
  };
  componentWillMount(){
    if(this.props.authenticated){
      this.initSocket();
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props.receiver!==nextProps.receiver){
    this.setState({
      receiver:nextProps.receiver
    },()=>{
      console.log(this.state.sender+this.state.receiver)
    })
  }
  console.log(nextProps.name)
  if(this.props.name!==nextProps.name){
    this.setState({
      className:null
    })
  }
  if(this.props.messages!==nextProps.messages){
    this.setState({
      messages:nextProps.messages
    })
  }
  }
  componentDidMount() {
    if(this.props.authenticated){
    const { socket,sender} = this.state;
    socket.on("RECEIVE_MESSAGE",data =>{
      console.log(data)
    
      if(data.receiver===sender){
        if(this.state.className==="hide"){
          notification.open({
            message: 'Messages',
            description: data.name+" send you a message",
            duration: 0,
          });
          this.props.addNumber(data.name)
        }
        this.setState({
          receiver:data.name,
          messages: [...this.state.messages,data]
        })
      }else if(data.name===sender){
        this.setState({
          messages: [...this.state.messages,data]
        })
      }
    })
  }
  }
  initSocket = () => {
    const socket = io("http://localhost:3001");
    this.setState({ 
      socket:socket,
      sender:this.props.email
    });
    socket.emit("NEW_USERS", {sender:this.props.email})
  };
  sendMessage = () => {
    const { socket,receiver,sender } = this.state;
    socket.emit("SEND_MESSAGE", {
      sender: sender,
      receiver:this.props.receiver,
      messages: this.state.message,
    },(data)=>{
      console.log(data)
      this.saveMessage({sender:data.name,receiver:data.receiver,message:data.messages})
    }); 
  };
  saveMessage =(message)=>{
    API.storeMessage(message)
    .then(res=>{
      console.log(message)
      console.log(res)
      this.setState({
        message:""
      })
    }).catch(err => console.log(err));
  }

  removeChatbox=() =>{
    this.setState({
      className:"hide",
      receiver:null,
      isOpen:false
    },()=>{
      console.log(this.state.isOpen)
    })
  }
  render() {
    return (
        <aside
          id="sidebar_secondary"
          className={`tabbed_sidebar ng-scope chat_sidebar dragme  ${this.state.className}`}
        >
          <div className="popup-head">
            <div className="popup-head-left pull-left">
              <a>{this.state.receiver}</a>
            </div>
            <div className="popup-head-right pull-right">
              <button className="chat-header-button" type="button">
                <MdVideoCall style={{fontSize:25}}></MdVideoCall>
              </button>
              <button className="chat-header-button" type="button">
                <IoAndroidCall style={{fontSize:20}}></IoAndroidCall>
              </button>

              <button
                data-widget="remove"
                id="removeclassName"
                className="chat-header-button pull-right"
                type="button"
              >
                <IoClose onClick={this.removeChatbox} style={{fontSize:20}}></IoClose>
              </button>
            </div>
          </div>

          <div
            id="chat"
            className="chat_box_wrapper chat_box_small chat_box_active"
            style={{
              opacity: 1,
              display: "block",
              transform: "translateX(0+'px')"
            }}
          >
            <div className="chat_box touchscroll chat_box_colors_a">
              {this.state.messages?this.state.messages.map((mes, i) => {
                return (
                  <div key={i} className={`chat_message_wrapper ${mes.name===this.state.sender?null:"chat_message_right"}` }>
                    <Avatar style={{float:mes.name===this.state.sender?"left":"right"}}>{mes.name.charAt(0)}</Avatar>
                    <div className="chat_user_avatar" />
                    <ul className="chat_message">
                      <li>
                      
                        <p>
                          {mes.messages}
                          <span className="chat_message_time">{mes.time}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                );
              }):null}
            </div>
          </div>
          <div className="chat_submit_box">
            <div className="uk-input-group">
              <div className="gurdeep-chat-box">
                <span className="uk-input-group-addon">
                  <a href="#">
                    <i className="fa fa-smile-o" />
                  </a>
                </span>
                <span className="uk-input-group-addon">
                  <a>
                    <i className="fa fa-camera" />
                  </a>
                </span>
                <a>{this.props.receiver?this.props.receiver:null}</a>
                {/* <input
                  type="text"
                  placeholder="Type a message"
                  id="submit_message"
                  style={{ width: 100 + "%" }}
                  name="submit_message"
                  className="md-input"
                  value={this.props.receiver}
                 
                /> */}
                {/* <input
                type="text"
                placeholder="Type a message"
                id="submit_message"
                style={{ width: 100 + "%" }}
                name="submit_message"
                className="md-input"
                value={this.state.sender}
                onChange={event =>
                  this.setState({ sender: event.target.value })
                }
              /> */}
                <input
                  type="text"
                  placeholder="Type a message"
                  id="submit_message"
                  style={{ width: 100 + "%" }}
                  name="submit_message"
                  className="md-input"
                  value={this.state.message}
                  onChange={event =>
                    this.setState({ message: event.target.value })
                  }
                />
              </div>
              <span className="uk-input-group-addon">
                <a onClick={this.sendMessage} href="#">
                  <i style={{marginTop:"20px"}}className="glyphicon glyphicon-send" />
                </a>
              </span>
            </div>
          </div>
        </aside>
    );
  }
}

export default Chatbox;
