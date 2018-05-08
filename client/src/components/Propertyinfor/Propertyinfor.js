import React, { Component } from "react";
import {Carousel, Layout, Menu, Breadcrumb } from "antd";
import IoIosPaw from "react-icons/lib/io/ios-paw";
import IoAndroidPersonAdd from "react-icons/lib/io/android-person-add";
import IoEmail from "react-icons/lib/io/email";
import {Rate} from "antd"
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
    email:localStorage.getItem("user")
  }
  success = () => {
    const user=localStorage.getItem("user")
    API.addFriends(user,{"friendlist":"eddie"}).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    message.config({
      top: 250,
      duration: 2
    });
    message.success("You have added a new friend!");
  };
  render() {
    // const { value } = this.state;
    return (
      <Layout style={{ paddingBottom: "106px", background: "white"}}className="layout">
        <Friendlist authenticated={this.props.item} email={this.state.email?this.state.email:null}></Friendlist>
        <div style={{marginTop: 5+"%"}}className="workspace">
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
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
                <a href={`mailto:eddiezhaor@gmail.com`}><IoEmail></IoEmail></a>,
                <IoIosTelephone ></IoIosTelephone>
              ]}
            >
              <div><a style={{fontWeight:"bold"}}>Verified User</a><IoAndroidCheckmarkCircle  style={{fontSize:30,color:"green"}}></IoAndroidCheckmarkCircle></div>
              <Meta
                // avatar={
                //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                // }
                title="Eddie"
                description="hello, it is me!"
              />
            </Card>
          </Sider>
          <Content>
            <div style={{ borderBottom:"1px solid #e8e8e8" ,background: "#fff", padding: 24, minHeight: 291 }}>
            <IoIosPaw style={{fontSize:30}}></IoIosPaw>
              <IoWifi style={{fontSize:30}} />
              <MdHotel style={{fontSize:30}}></MdHotel>
              <MdHotTub style={{fontSize:30}}></MdHotTub>
              <IoAndroidPeople style={{fontSize:30}}></IoAndroidPeople>
              <MdTv style={{fontSize:30}}></MdTv>
              <Rate disabled defaultValue={2} />
            </div>
          </Content>
        </Layout>
        <Layout>
          <Sider style={{border:"0.5px solid #e8e8e8",background:"white"}}>
          {/* <hr style={{border: "1px solid #e8e8e8",marginTop: 10+"%"}}/> */}
          <div style={{textAlign:"center",marginTop: 35+"%"}}>
            <p>Start your trip from here! <GoLightBulb style={{color:"gold", fontSize:20}}></GoLightBulb></p>
            <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
            />
            <Billingform ></Billingform>
            {/* <Button style={{border:"none", backgroundColor:"#FF5A5F",marginTop: 10+"%"}} type="primary" htmlType="submit" className="login-form-button">
              Book
            </Button> */}
          </div>
          </Sider>
          <Content>
            <div style={{  borderBottom:"1px solid #e8e8e8",background: "#fff", padding: 24, minHeight: 280 }}>
                Reviews
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Propertyinfor;
