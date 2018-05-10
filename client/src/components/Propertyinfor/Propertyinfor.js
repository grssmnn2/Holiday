import React, { Component } from "react";
import {Carousel, Layout, Menu, Breadcrumb } from "antd";
import IoIosPaw from "react-icons/lib/io/ios-paw";
import IoAndroidPersonAdd from "react-icons/lib/io/android-person-add";
import IoEmail from "react-icons/lib/io/email";
import IoWifi from "react-icons/lib/io/wifi";
import MdHotel from "react-icons/lib/md/hotel"
import MdHotTub from "react-icons/lib/md/hot-tub";
import IoAndroidPeople from "react-icons/lib/io/android-people";
import MdTv from "react-icons/lib/md/tv";
import IoIosTelephone from "react-icons/lib/io/ios-telephone";
import IoAndroidCheckmarkCircle from  "react-icons/lib/io/android-checkmark-circle";
import GoLightBulb from "react-icons/lib/go/light-bulb"
import { Card, Icon, Avatar } from "antd";
import { message, Button } from "antd";
import { DatePicker } from 'antd';
import moment from 'moment';
import {Rate} from "antd"
import Billingform from "../Billingform"
import Friendlist from "../Friendlist"
import API from "../../utils/API"
import "./Propertyinfor.css";
const { Meta } = Card;
const { Header, Content, Sider, Footer } = Layout;
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
class Propertyinfor extends Component {
  state={
    email:this.props.location.state.email,
    userName:this.props.location.state.userName,
    userInfor:"",
    review:[],
    myName:"",
    friendlist:[],
    pendingTrip:"",
    date:[]
  }
  componentDidMount(){
    API.retrieveUserData(this.state.email).then(result=>{
      console.log(result)
      this.setState({
        userInfor:result.data,
        review:result.data.review
      },()=>{
        console.log(this.state.userInfor,this.state.review)
      })
    }).catch(err=>{
      console.log(err)
    })
    API.retrieveUserData(localStorage.getItem("user")).then(result=>{
      this.setState({
        myName:result.data.name
      })
    }).catch(err=>{
      console.log(err)
    })
  }
  success = () => {
    const user=localStorage.getItem("user")
    console.log(user)
    API.addFriends(user,this.state.myName,{"friendlist":{email:this.state.email,name:this.state.userName}}).then(res=>{
      this.setState({
        friendlist:res.data.friendlist
      })
    }).catch(err=>{
      console.log(err)
    })
    message.config({
      top: 250,
      duration: 2
    });
    message.success("You have added a new friend!");
  };
  createNewTrip=(result)=>{
    this.setState({
      pendingTrip:result
    })
  }
  onChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({
        date: dateString
    },()=>{
      console.log(this.state.date)
    })
}
  render() {
    const {userInfor}=this.state;
    const aa=[1,2,3,4]
    console.log(this.state.review)
    return (
      <Layout style={{ paddingBottom: "106px", background: "white"}}className="layout">
        <Friendlist pendingTrip={this.state.pendingTrip} friendlist={this.state.friendlist}authenticated={this.props.item} email={localStorage.getItem("user")?localStorage.getItem("user"):null}></Friendlist>
        <div style={{marginTop: 5+"%"}}className="workspace">
        <Carousel autoplay>
           {userInfor.imageLink?userInfor.imageLink.map((image,i)=>{
             return (
             <div key={i}>
               <img style={{height:"300px",width:100+"%"}}src={image.link}></img>
               </div>
             )
           }):null}
        </Carousel>
        </div>
        <Layout>
          <Sider>
            <Card
              style={{ width: 100 + "%" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <IoAndroidPersonAdd onClick={this.success} ></IoAndroidPersonAdd>,
                <a href={"mailto:"+userInfor.email}><IoEmail></IoEmail></a>,
                <IoIosTelephone ></IoIosTelephone>
              ]}
            >
              <div><a style={{fontWeight:"bold"}}>Verified User</a><IoAndroidCheckmarkCircle  style={{fontSize:30,color:"green"}}></IoAndroidCheckmarkCircle></div>
              <Meta
                // avatar={
                //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                // }
                title={userInfor.name}
                description="Hello, it is me!"
              />
            </Card>
          </Sider>
          <Content>
            <div style={{ borderBottom:"1px solid #e8e8e8" ,background: "#fff", padding: 24, minHeight: 291 }}>
              <IoAndroidPeople style={{fontSize:30}}></IoAndroidPeople>{userInfor.guest+" "}Guests
              <IoWifi style={{fontSize:30,marginLeft: "21px"}} ></IoWifi>{userInfor.wifi}
              <MdHotel style={{fontSize:30,marginLeft: "21px"}}></MdHotel>{userInfor.bedroom+" "}Bedrooms
              <MdHotTub style={{fontSize:30,marginLeft: "21px"}}></MdHotTub>{userInfor.bathroom+" "}Bathrooms
              <IoIosPaw style={{fontSize:30,marginLeft: "21px"}}></IoIosPaw>Pets Allowed:{" "+userInfor.pets}
              <h2  className="text-center"style={{color:"rgb(0, 132, 137)",marginTop:"5px",fontFamily: 'Quicksand,sans-serif'}}>Description</h2>
              <textarea className="description"readOnly value={userInfor.description}></textarea>
        
            </div>
          </Content>
        </Layout>
        <Layout>
          <Sider style={{border:"0.5px solid #e8e8e8",background:"white"}}>
          {/* <hr style={{border: "1px solid #e8e8e8",marginTop: 10+"%"}}/> */}
          <div style={{textAlign:"center",marginTop: 35+"%"}}>
            <p>Start your trip from here! <GoLightBulb style={{color:"gold", fontSize:20}}></GoLightBulb></p>
            <RangePicker
            onChange={this.onChange}
            defaultValue={[moment('2018/01/01', dateFormat), moment('2018/01/02', dateFormat)]}
            format={dateFormat}
            />
            <Billingform date={this.state.date}pendingTrip={this.state.pendingTrip} newTrip={(result)=>this.createNewTrip(result)}user={this.state.email}></Billingform>
            {/* <Button style={{border:"none", backgroundColor:"#FF5A5F",marginTop: 10+"%"}} type="primary" htmlType="submit" className="login-form-button">
              Book
            </Button> */}
          </div>
          </Sider>
          <Content>
            <div style={{  borderBottom:"1px solid #e8e8e8",background: "#fff", padding: 24, minHeight: 280 }}>
          <a style={{fontSize:"20px",fontFamily: 'Quicksand,sans-serif'}}>{userInfor.name}'s Overall Rating:</a><Rate disabled allowHalf value={Math.round(userInfor.rating*2/userInfor.numberOfRatings)/2}/>{Math.round(userInfor.rating*2/userInfor.numberOfRatings)/2+" "}stars 
                <div className="review">
                 {this.state.review?this.state.review.map((comment,i)=>{ 
                   console.log("yes")
                   return (
                  <a key={i}>
                  <h4 style={{fontFamily: 'Libre Baskerville,serif'}}>{comment.name}:</h4>
                  <Rate disabled allowHalf value={comment.score}/>
                   <p style={{fontFamily: 'Open Sans Condensed,sans-serif',fontSize: "28px"}}>{comment.content}</p>
                   <hr/>
                   </a>
                  )
             
                }):null}
                </div>
              </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Propertyinfor;
