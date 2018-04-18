import React, { Component } from "react";
import io from "socket.io-client";
import "./Chatbox.css";
import Draggable, {DraggableCore} from 'react-draggable';
class Chatbox extends Component {
  state = {
    username: "eddie",
    message: "",
    messages: [],
    socket: null
  };
  componentDidMount() {
    this.initSocket();
  }
  initSocket = () => {
    const socket = io("http://localhost:3001");
    this.setState({ socket });
    socket.on("RECEIVE_MESSAGE", data => {
      this.setState({
        messages:data.messages
      })
     
    });
  };
  sendMessage = () => {
    const { socket } = this.state;
    socket.emit("SEND_MESSAGE", {
      author: "eddie",
      messages: [...this.state.messages,this.state.message]
    });
 
  };
  render() {
    return(
<Draggable>
    <aside
      id="sidebar_secondary"
      className="tabbed_sidebar ng-scope chat_sidebar"
    >
      <div className="popup-head">
        <div className="popup-head-left pull-left"><a>{this.state.username}</a></div>
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
            {this.state.messages.map((mes,i)=>{
              return (<div key={i}className="chat_message_wrapper">
              <div className="chat_user_avatar" />
              <ul className="chat_message">
                <li>
                  <p>
                   
                    {mes}<span className="chat_message_time">
                      13:38
                    </span>
                  </p>
                </li>
              </ul>
            </div>)
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
              value={this.state.message}
              onChange={(event)=>this.setState({message:event.target.value})}
            />
            <span className="uk-input-group-addon">
              <a href="#">
                <i className="fa fa-camera" />
              </a>
            </span>
          </div>
          <span className="uk-input-group-addon">
            <a onClick={this.sendMessage} href="#">
              <i className="glyphicon glyphicon-send" />
            </a>
          </span>
        </div>
      </div>
    </aside>
    </Draggable>);
  }
}

export default Chatbox;
