import { List, message, Avatar, Spin } from 'antd';
import React from "react";
import API from "../../utils/API"
import {Collapse} from 'react-collapse';
import InfiniteScroll from 'react-infinite-scroller';
import GoX from "react-icons/lib/go/x";
import IoIosChatbubbleOutline from "react-icons/lib/io/ios-chatbubble-outline";
import Chatbox from "../Chatbox"
import Navbar from "../Navbar"
import GoMailRead from "react-icons/lib/go/mail-read"
import "./Friendlist.css";
import "../../utils/API"
import { Z_DEFAULT_COMPRESSION } from 'zlib';
class Friendlist extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
    isOpened:false,
    className:"hide",
    receiver:null,
    messages:[],
    unreadUser:{},
    messageNumber:0
  }
  componentDidMount(){
    API.retrieveFriendList(this.props.email).then(res=>{
      console.log(res)
      this.setState({
        data:res.data.friendlist
      },()=>{
        let unreadMessage={}
        API.retrieveUnreadMessage(this.props.email).then(result=>{
          result.data.forEach(message=>{
            unreadMessage[message.sender]=true
          })
          this.setState({
            unreadUser:unreadMessage,
            messageNumber:result.data.length
          })
      }).catch(err=>console.log(err))
      })
    }).catch(err=>{
      console.log(err)
    })
  }
  componentWillReceiveProps(nextProps){
    if(this.props.friendlist!=nextProps.friendlist){
      this.setState({
        data:nextProps.friendlist
      })
    }
  }
  // retriveList = (user) =>{
  //   API.retrieveFriendList(user)
  //   .then(data=>this.setState({data}))
  //   .catch(err=>console.log(err))
  // }
  handleInfiniteOnLoad = () => {
    let {data} =this.state; 
    this.setState({
      loading: true
    });
    if (data.length > 5) {
      message.config({
        duration: 1.5
      });
      message.warning('That is all!');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
  }
  display =()=>{
    this.setState({
      isOpened:!this.state.isOpened
    })
  }
  showChatbox =(user)=>{
    if(this.state.className===null){
      API.updateMessage(user,this.props.email).then(data=>{
        const readMessage=this.state.unreadUser;
        readMessage[user]=false
        this.setState({
          unreadUser:readMessage,
          messageNumber:0
        })
      }).catch(err=>console.log(err))
      this.setState({
        className:"hide",
        receiver:user,
        historyMessage:!this.state.historyMessage
      },()=>{
        this.displayHistoryMessage()
      })
    }else{
      API.updateMessage(user,this.props.email).then(data=>{
        console.log(data)
        const readMessage=this.state.unreadUser;
        readMessage[user]=false
        this.setState({
          unreadUser:readMessage,
          messageNumber:0
        })
      }).catch(err=>console.log(err))
    this.setState({
      className:null,
      receiver:user,
      historyMessage:!this.state.historyMessage
    },()=>{
      this.displayHistoryMessage()
    })}
  }
  displayHistoryMessage = ()=>{
    API.findhistoryMessage(this.props.email,this.state.receiver)
    .then(res =>{
      console.log(res)
      let obj=[];
      res.data.forEach(element => {
          obj=[...obj,{name:element.sender, receiver:element.receiver,messages:element.message,time:element.created.substring(0,19)}]
      });
      console.log("hello")
      this.setState({
        messages:obj
      },()=>{
        console.log(this.state.messages)
      })
    }).catch(err => console.log(err))
  }
  addNumber=(name)=>{
    const readMessage=this.state.unreadUser;
    readMessage[name]=true
    this.setState({
      messageNumber:this.state.messageNumber+1,
      unreadUser:readMessage,
    })
  }
  render() {
    const {unreadUser}=this.state;
    return (
      <div>
      <Navbar pendingTrip={this.props.pendingTrip}number={this.state.messageNumber} authenticated={this.props.authenticated} click={this.display}></Navbar>
      <Chatbox addNumber={(name)=>this.addNumber(name)}authenticated={this.props.authenticated} messages={this.state.messages} isOpen={this.state.historyMessage} email={this.props.email} receiver={this.state.receiver}  name={this.state.className}></Chatbox>
      <Collapse isOpened={this.state.isOpened} fixedHeight={400}>
      <GoX onClick={this.display} style={{fontSize:30,float:"right"}}></GoX>
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item >
                <List.Item.Meta
                  avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGh_yZxpnGqUgbbGQsbXVK0RQWVWr_Qgz3hlAKzZJZiOvFN8m" />}
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.email}
                />
                <div onClick={()=>this.showChatbox(item.email)}>{unreadUser[item.email]===true?<GoMailRead  style={{fontSize:30,color:"gold"}}></GoMailRead>:<IoIosChatbubbleOutline  style={{fontSize:30}}></IoIosChatbubbleOutline>}</div>
              </List.Item>
            )}
          >
          </List>
        </InfiniteScroll>
      </div>
      </Collapse>
      </div>
    );
  }
}
export default Friendlist;