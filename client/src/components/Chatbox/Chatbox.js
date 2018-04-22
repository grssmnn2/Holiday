import React, { Component } from "react";
import io from "socket.io-client";
import API from "../../utils/API";
import "./Chatbox.css";
class Chatbox extends Component {
  state = {
    sender:"",
    message: "",
    messages: [],
    socket: null,
    receiver:""
  };
  componentWillMount(){
    this.initSocket();
  }
  componentDidMount() {
    const { socket,sender} = this.state;
    socket.on("RECEIVE_MESSAGE",data =>{
      console.log(data)
      if(data.receiver===sender){
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
  initSocket = () => {
    const socket = io("http://localhost:3001");
    const name=["eddie","megan","a","b","c","d"];
    let num=Math.floor(Math.random()*name.length)
    this.setState({ 
      socket:socket,
      sender:name[num]
    });
    socket.emit("NEW_USERS", {sender:name[num]})
  };
  sendMessage = () => {
    const { socket,receiver,sender } = this.state;
    socket.emit("SEND_MESSAGE", {
      sender: sender,
      receiver:receiver,
      messages: this.state.message
    },(data)=>{
      console.log(data)
      this.saveMessage({sender:data.name,receiver:data.receiver,message:data.messages})
    }); 
  };
  saveMessage =(message)=>{
    API.storeMessage(message)
    .then(res=>{
      console.log("hello")
    }).catch(err => console.log(err));
  }
  displayHistoryMessage = ()=>{
    API.findhistoryMessage(this.state.sender,this.state.receiver)
    .then(res =>{
      let obj=[];
      res.data.forEach(element => {
          obj=[...obj,{name:element.sender, receiver:element.receiver,messages:element.message,time:element.created}]
      });
      this.obj
      this.setState({
        messages:obj
      })
    }).catch(err => console.log(err))
  }
  render() {
    return (
        <aside
          id="sidebar_secondary"
          className="tabbed_sidebar ng-scope chat_sidebar dragme"
        >
          <div className="popup-head">
            <div className="popup-head-left pull-left">
              <a>{this.state.receiver}</a>
            </div>
            <div className="popup-head-right pull-right">
              <button className="chat-header-button" type="button">
                <i className="glyphicon glyphicon-facetime-video" />
              </button>
              <button className="chat-header-button" type="button">
                <i className="glyphicon glyphicon-earphone" />
              </button>

              <button
                data-widget="remove"
                id="removeclassName"
                className="chat-header-button pull-right"
                type="button"
              >
                <i className="glyphicon glyphicon-remove" />
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
              {this.state.messages.map((mes, i) => {
                return (
                  <div key={i} className={`chat_message_wrapper ${mes.name===this.state.sender?null:"chat_message_right"}` }>
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
              })}

              {/* <div className="chat_message_wrapper chat_message_right">
            <div className="chat_user_avatar" />
            <ul className="chat_message">
              <li>
                <p>
                  it is me
                  <span className="chat_message_time">13:34</span>
                </p>
              </li>
            </ul>
          </div> */}
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
                <input
                  type="text"
                  placeholder="Type a message"
                  id="submit_message"
                  style={{ width: 100 + "%" }}
                  name="submit_message"
                  className="md-input"
                  value={this.state.receiver}
                  onChange={event =>
                    this.setState({ receiver: event.target.value })
                  }
                />
                <input
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
              />
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
                <span className="uk-input-group-addon">
                  <a href="#">
                    <i className="fa fa-camera" />
                  </a>
                </span>
              </div>
              <span className="uk-input-group-addon">
<<<<<<< HEAD
                <a onClick={this.sendMessage} href="#">
                  <i className="glyphicon glyphicon-send" />
                </a>
=======
                {/* <Link to={"/api/message/"} onClick={this.sendMessage} href="#">
                  <i className="glyphicon glyphicon-send" />
                </Link> */}
>>>>>>> master
              </span>
              <a onClick={this.displayHistoryMessage}>click this</a>
            </div>
          </div>
        </aside>
    );
  }
}

export default Chatbox;
