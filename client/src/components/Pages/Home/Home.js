import React, { Component } from "react";
import Navbar from "../../Navbar"
import Friendlist from "../../Friendlist"
import Footer from "../../Footer"
import { Modal, Button } from 'antd';


class Home extends Component {
	// code to open modal
	state = { visible: false }
	showModal = () => {
	  this.setState({
		visible: true,
	  });
	}
	handleOk = (e) => {
	  console.log(e);
	  this.setState({
		visible: false,
	  });
	}
	handleCancel = (e) => {
	  console.log(e);
	  this.setState({
		visible: false,
	  });
	}

    render() {
        return (
            <div style={{minWidth:900+"px"}}>
			{/* <Friendlist email={this.props.location.state.email}></Friendlist> */}
            <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-center" style={{height: '915px'}}>
                        <div className="banner-content col-lg-12 col-md-12">
                            <h1 className="text-uppercase">
                                HOLIDAY
                    		</h1>
                            <div className="search-field">
                                <form className="search-form" action="#">
                                    <div className="row">
                                        <div className="col-lg-12 d-flex align-items-center justify-content-center toggle-wrap">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="search-title">Find a Swap</h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-lg-12 col-md-12 col-xs-12">
                                                <select name="location" className="app-select form-control" required>
                                                    <option data-display="Choose locations">Choose locations</option>
                                                    <option value="1">Chicago</option>
                                                    <option value="2">Hawaii</option>

                                                </select>
                                            </div>

											  <Modal
         										 title="Available Apartments"
         										 visible={this.state.visible}
         										 onOk={this.handleOk}
         										 onCancel={this.handleCancel}
       												 >
         										 <div className="apts"><p>Apts will eventually be shown here</p></div>
       										 </Modal>
                                         
                                            </div>
                                            <div className="row">
                                            <div className="col-lg-12 d-flex justify-content-end">
                                                <button className="primary-btn mt-50" style={{height: '45px', marginLeft: '95px'}} onClick={this.showModal}>
												Search Properties<span className="lnr lnr-arrow-right"></span></button>
												
                                            </div>
										
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
							
                        </div>
                    </div>
                </div>
            </section>

            {/* service area */}

            <section className="service-area section-gap" id="service">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-8 pb-40 header-text">
							<h1>Why use Holiday?</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6 pb-30">
							<div className="single-service">
								<h4><span className="lnr lnr-user"></span>Lower Vacation Costs</h4>
								<p>
									Plan a budget friendly vacation by saving money on housing. Dying to try that new restaurant or sail on a cruise around your favorite island?
									 Spend your money on what you truly care about it and leave the housing concerns to us.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 pb-30">
							<div className="single-service">
								<h4><span className="lnr lnr-license"></span>Professional Service</h4>
								<p>
									Feel safe swapping apartments knowing we take our user safety seriously. Read and write reviews of 
									past visits. Know that every user is background checked before being allowed to use the application.
								</p>								
							</div>
						</div>
						<div className="col-lg-4 col-md-6 pb-30">
							<div className="single-service">
								<h4><span className="lnr lnr-phone"></span>Easy Access</h4>
								<p>
									Access our application from any device, on the go or at home. Contact our customer support team with any concerns, 24/7.
								</p>								
							</div>
						</div>
					</div>
				</div>	
			</section>
            {/* property area */}
            <section className="property-area section-gap relative" id="property">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-8 pb-40 header-text">
							<h1>Our Best Reviewed Properties</h1>
							<p>
								Who doesn't love a successful vacation story?
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="single-property">
								<div className="images">
									<img className="img-fluid mx-auto d-block" src={require("../../../img/s1.jpg")} alt=""></img>
									<span>Request a swap</span>
								</div>
								
								<div className="desc">
									<div className="top d-flex justify-content-between">
										<h4><a href="#">04 Bed Duplex</a></h4>
										
									</div>
									<div className="middle">
										<div className="d-flex justify-content-start">
										<p>Bed: 04</p>
										<p>Bath: 03</p>
										<p>Area: 750sqm</p>
										</div>
										<div className="d-flex justify-content-start">
										<p>Pool: <span className="gr">Yes</span></p>
										<p>Internet: <span className="rd">No</span></p>
										<p>Cleaning: <span className="rd">No</span></p>
										</div>
									</div>
									<div className="bottom d-flex justify-content-start">
										<p><span className="lnr lnr-heart"></span> 15 Likes</p>
										<p><span className="lnr lnr-bubble"></span> 02 Comments</p>
									</div>	
								</div>	
							</div>
						</div>	
						<div className="col-lg-4">
							<div className="single-property">
								<div className="images">
									<img className="img-fluid mx-auto d-block" src={require("../../../img/s2.jpg")} alt=""></img>
									<span>Request a Swap</span>
								</div>
								
								<div className="desc">
									<div className="top d-flex justify-content-between">
										<h4><a href="#">04 Bed Duplex</a></h4>
										
									</div>
									<div className="middle">
										<div className="d-flex justify-content-start">
										<p>Bed: 04</p>
										<p>Bath: 03</p>
										<p>Area: 750sqm</p>
										</div>
										<div className="d-flex justify-content-start">
										<p>Pool: <span className="gr">Yes</span></p>
										<p>Internet: <span className="rd">No</span></p>
										<p>Cleaning: <span className="rd">No</span></p>
										</div>
									</div>
									<div className="bottom d-flex justify-content-start">
										<p><span className="lnr lnr-heart"></span> 15 Likes</p>
										<p><span className="lnr lnr-bubble"></span> 02 Comments</p>
									</div>	
								</div>	
							</div>
						</div>	
						<div className="col-lg-4">
							<div className="single-property">
								<div className="images">
									<img className="img-fluid mx-auto d-block" src={require("../../../img/s3.jpg")} alt=""></img>
									<span>Request a Swap</span>
								</div>
								
								<div className="desc">
									<div className="top d-flex justify-content-between">
										<h4><a href="#">04 Bed Duplex</a></h4>
									
									</div>
									<div className="middle">
										<div className="d-flex justify-content-start">
										<p>Bed: 04</p>
										<p>Bath: 03</p>
										<p>Area: 750sqm</p>
										</div>
										<div className="d-flex justify-content-start">
										<p>Pool: <span className="gr">Yes</span></p>
										<p>Internet: <span className="rd">No</span></p>
										<p>Cleaning: <span className="rd">No</span></p>
										</div>
									</div>
									<div className="bottom d-flex justify-content-start">
										<p><span className="lnr lnr-heart"></span> 15 Likes</p>
										<p><span className="lnr lnr-bubble"></span> 02 Comments</p>
									</div>	
								</div>	
							</div>
						</div>																											
					</div>
				</div>	
			</section>
		
            </div>
        );
    }
}

export default Home;