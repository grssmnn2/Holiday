import React, { Component } from "react";
import { Modal, Button } from "antd";
import Cards from "react-credit-cards";
import { Timeline, Cascader, Select,message } from "antd";
import "react-credit-cards/es/styles-compiled.css";
import "./Billingform.css";
import API from "../../utils/API"
import state from "./state.json";
const confirm = Modal.confirm;
const Option = Select.Option;

const options = state;
class Billingform extends Component {
  state = {
    loading: false,
    visible: false,
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focused: "",
    text:true,
    step1: "green",
    step2: "red",
    step3: "red",
    billing: false,
    complete:false
  };
  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      this.setState({
        [target.name]: target.value.replace(/ /g, "")
      });
    } else if (target.name === "expiry") {
      this.setState({
        [target.name]: target.value.replace(/ |\//g, "")
      });
    } else {
      this.setState({
        [target.name]: target.value
      });
    }
  };

  handleCallback(type, isValid) {
    console.log(type, isValid); //eslint-disable-line no-console
  }
  showConfirm = cb => {
    confirm({
      title: "Do you Want to submit your payment?",
      content: "",
      onOk() {
        cb();
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };
  showConfirm2 = (cb) => {
    confirm({
      title: "Do you Want to leave this page?",
      content: "You have not completed your payment yet",
      onOk() {
        cb()
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    const cb = () => {
      this.setState({ 
        loading: true,
        step3:"green"
       });
       console.log(this.props.id)
       API.confirmTrip(this.props.id).then(result=>{
        window.location.reload()
       }).catch(err=>console.log(err))
      setTimeout(() => {
        this.setState({ loading: false, visible: false,
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focused: "",
        text:true,
        step1: "green",
        step2: "red",
        step3: "red",
        billing: false,
        complete:false })
        message.config({
          duration: 3
        })
        message.success('Reservation confirmed! You will receive a confirmation email in 5 minutes!');;
      }, 3000);
    };
    this.showConfirm(cb);
  };

  handleCancel = () => {
    const cb =()=>{
      this.setState({ visible: false,
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focused: "",
        text:true,
        step1: "green",
        step2: "red",
        step3: "red",
        billing: false,
        complete:false });
    };
    this.showConfirm2(cb)
  }
  Billing = () => {
    if(!this.state.complete){
    this.setState({
      billing: true,
      step1: "green",
      step2:"green",
      text:false,
      complete:true
    });
  }
  else if(this.state.complete){
    this.handleOk();
  }
  };
  render() {
    const { visible, loading } = this.state;
    const { billing, name, number, expiry, cvc, focused } = this.state;
    const Card = billing ? (
      <form style={{ marginLeft: 130+"px",
        marginTop: -9+"%",display:"inline-block"}}>
        <div>
          <div>Billing Address</div>
          <input
            style={{
              border: "1px solid black",
              borderRadius: 4 + "px",
              width: 520 + "px"
            }}
            type="text"
            name="address"
            placeholder="1234 Main St"
          />
        </div>
        <div>
          <div>Address 2</div>
          <input
            style={{
              border: "1px solid black",
              borderRadius: 4 + "px",
              width: 520 + "px"
            }}
            type="text"
            name="address2"
            placeholder="Apartment, studio or floor"
          />
        </div>
        <div>
          <div style={{ display: "inline-block", marginTop: 3 + "px" }}>
            City
          </div>
          <div style={{ display: "inline-block", marginTop: 3 + "px", marginLeft:30+"%" }}>
            State
          </div>
          <div style={{ display: "inline-block", marginTop: 3 + "px", marginLeft:28+"%" }}>
            Zip
          </div>
          <div style={{ clear: "both" }} />
          <input
            style={{
              border: "1px solid black",
              marginRight: 20 + "px",
              borderRadius: 4 + "px",
              width: 160 + "px"
            }}
            type="text"
            name="city"
            placeholder="Chicago"
            onKeyUp={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Cascader
            style={{
              width:160+"px",
              marginRight:20+"px",
            }}
            options={options}
            placeholder="Select State"
          />
          <input
            style={{
              border: "1px solid black",
              borderRadius: 4 + "px",
              width: 160 + "px",
            }}
            type="number"
            name="zip"
            placeholder="12345"
            onKeyUp={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </div>
        <div style={{marginTop: 20+"px",color:"black",
    marginLeft: 65+"%"}}>Security Deposit: $1000.00</div>
        <div style={{
    marginLeft: 86+"%",color:"black",}}>Tax: $0.00</div>
        <div style={{
    marginLeft: 80+"%",color:"black",}}>Total: $1000.00</div>
      </form>
    ) : (
      <div style={{ display: "inline-block" }}>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={this.handleCallback}
        />
        <form style={{ marginTop: 17 + "px", marginLeft: 174 + "px" }}>
          <div>
            <div>Card Number</div>
            <input
              style={{
                border: "1px solid black",
                borderRadius: 4 + "px",
                width: 400 + "px"
              }}
              type="tel"
              name="number"
              placeholder="1234 5678 9012 3456"
              onKeyUp={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div>
            <div style={{ marginTop: 3 + "px" }}>Name on card</div>
            <input
              style={{
                border: "1px solid black",
                borderRadius: 4 + "px",
                width: 400 + "px"
              }}
              type="text"
              name="name"
              placeholder="Ex. Steven Curry"
              onKeyUp={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div>
            <div style={{ marginTop: 3 + "px" }}>Expiry Date</div>
            <input
              style={{
                border: "1px solid black",
                marginRight: 20 + "px",
                borderRadius: 4 + "px",
                width: 200 + "px"
              }}
              type="tel"
              name="expiry"
              placeholder="01/19"
              onKeyUp={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              style={{
                border: "1px solid black",
                borderRadius: 4 + "px",
                width: 180 + "px"
              }}
              type="tel"
              name="cvc"
              placeholder="CVC"
              onKeyUp={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
        </form>
      </div>
    );
    return (
      <div>
        <Button
          style={{
            border: "none"
          }}
          type="primary"
          onClick={this.showModal}
        >
          Confirm
        </Button>
        <Modal
          width="700px"
          visible={visible}
          title="Security Deposit"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.Billing}
            >
             {this.state.text?"Next":"Submit"}
            </Button>
          ]}
        >
          <div style={{ display: "inline-block" }}>
            <Timeline>
              <Timeline.Item color={this.state.step1}>Payment </Timeline.Item>
              <Timeline.Item color={this.state.step2}>
                Billing Address{" "}
              </Timeline.Item>
              <Timeline.Item color={this.state.step3}>
                <p>Complete</p>
              </Timeline.Item>
            </Timeline>
            {Card}
          </div>
        </Modal>
      </div>
    );
  }
}

export default Billingform;
