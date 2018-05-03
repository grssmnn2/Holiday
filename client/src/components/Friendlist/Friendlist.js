import { List, message, Avatar, Spin } from 'antd';
import React from "react";
import API from "../../utils/API"
import {Collapse} from 'react-collapse';
import InfiniteScroll from 'react-infinite-scroller';
import GoX from "react-icons/lib/go/x";
import IoIosChatbubbleOutline from "react-icons/lib/io/ios-chatbubble-outline";
import Chatbox from "../Chatbox"
import Navbar from "../Navbar"
import "./Friendlist.css";
import "../../utils/API"
class Friendlist extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
    isOpened:false,
    className:"hide",
    receiver:null,
    messages:[]
  }
  componentDidMount(){
    API.retrieveFriendList(this.props.email).then(res=>{
      console.log(res)
      this.setState({
        data:res.data.friendlist
      })
    }).catch(err=>{
      console.log(err)
    })
   
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
    this.setState({
      className:null,
      receiver:user,
      historyMessage:!this.state.historyMessage
    },()=>{
      this.displayHistoryMessage()
    })
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
  render() {
    return (
      <div>
      <Navbar display={this.display}></Navbar>
      <Chatbox messages={this.state.messages} isOpen={this.state.historyMessage} email={this.props.email} receiver={this.state.receiver}  name={this.state.className}></Chatbox>
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
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.email}
                />
                <div onClick={()=>this.showChatbox(item.email)}><IoIosChatbubbleOutline  style={{fontSize:30}}></IoIosChatbubbleOutline></div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
      </Collapse>
      </div>
    );
  }
}
export default Friendlist;