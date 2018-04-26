import { List, message, Avatar, Spin } from 'antd';
import React from "react";
import {Collapse} from 'react-collapse';
import InfiniteScroll from 'react-infinite-scroller';
import GoX from "react-icons/lib/go/x";
import IoIosChatbubbleOutline from "react-icons/lib/io/ios-chatbubble-outline";
import Chatbox from "../Chatbox"
import "./Friendlist.css";
import "../../utils/API"
class Friendlist extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
    isOpened:false,
    className:"hide"
  }
  componentDidMount(){
    const data = [
      {
        title: 'Title 1',
      },
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      }, 
      {
        title: 'Title 4',
      }, {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      }, 
      {
        title: 'Title 4',
      }
    ];
    this.setState({
      data
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
  showChatbox =()=>{
    this.setState({
      className:null
    })
  }
  removeChatbox=() =>{
    this.setState({
      className:"hide"
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.display}>click me!!!</button>
      <Chatbox click={this.removeChatbox} name={this.state.className}></Chatbox>
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
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.title}
                />
                <div><IoIosChatbubbleOutline onClick={this.showChatbox} style={{fontSize:30}}></IoIosChatbubbleOutline></div>
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