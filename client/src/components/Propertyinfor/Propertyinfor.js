import React, { Component } from "react";
import {Carousel, Layout, Menu, Breadcrumb } from "antd";
import { Rate } from 'antd';
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
import Billingform from "../Billingform"
import API from "../../utils/API"
import "./Propertyinfor.css";
const { Meta } = Card;
const { Header, Content, Sider, Footer } = Layout;
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
class Propertyinfor extends Component {
  state = {
    value: 3
  };
  handleChange = value => {
    this.setState({ value });
  };
  success = () => {
    console.log(this.props.location.state.email)
    API.addFriends(this.props.location.state.email,{"friendlist":"eddie"}).then(res=>{
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
    const { value } = this.state;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
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
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              Content
            </div>
          </Content>
        </Layout>
        <Layout>
          <Sider style={{border:"0.5px solid #e8e8e8",background:"white"}}>
          <hr style={{border: "1px solid #e8e8e8",marginTop: 10+"%"}}/>
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
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <IoIosPaw style={{fontSize:30}}></IoIosPaw>
              <IoWifi style={{fontSize:30}} />
              <MdHotel style={{fontSize:30}}></MdHotel>
              <MdHotTub style={{fontSize:30}}></MdHotTub>
              <IoAndroidPeople style={{fontSize:30}}></IoAndroidPeople>
              <MdTv style={{fontSize:30}}></MdTv>
              
              <span>
                <Rate onChange={this.handleChange}  style={{ color: '#00c' }} value={value} />
                {value && <span className="ant-rate-text">{value} stars</span>}
              </span>
              <Rate disabled defaultValue={2} />
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Propertyinfor;
