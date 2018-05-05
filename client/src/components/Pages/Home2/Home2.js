import React, { Component } from "react";
import Friendlist from "../../Friendlist"
import { Redirect } from "react-router-dom";



class Home2 extends Component {
		// code to open modal
		// state = { visible: false }
		state={
			city:null,
			isredirect:false,
			email:localStorage.getItem("user")
		}
		resultsPage = (event) => {
			event.preventDefault()
		  this.setState({
		// 	visible: true,
			city: event.target.value 
		  },()=>{
			  console.log(this.state.city)
		  });
		}
		displayResults =()=>{
			this.setState({
				isredirect:true
			})
		
		}
	render() {
		console.log(this.props.item)
		console.log(this.state.email)
		if(this.state.isredirect){
			return <Redirect to={{pathname:"/result",state:{city:this.state.city}}}></Redirect>
		}
        return (
            <div style={{minWidth:900+"px"}}>
			<Friendlist authenticated={this.props.item} email={this.state.email?this.state.email:null}></Friendlist>
			<div className="main-content" style={{ padding: "5em" }}>
              <div className="workspace">
            <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-center" style={{height: '915px'}}>
                        <div className="banner-content col-lg-12 col-md-12">
                            <h1 className="text-uppercase">
                                HOLIDAY
                    		</h1>
                            <div className="search-field">
                                <form className="search-form">
                                    <div className="row">
                                        <div className="col-lg-12 d-flex align-items-center justify-content-center toggle-wrap">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="search-title text-uppercase" style={{margin: "25px", fontSize: "25px"}}>Find a Swap</h4>
                                                </div>
                                            
                                           
                                            <div className="col-lg-12 col-md-12 col-xs-12">
                                                <select name="location" onChange={this.resultsPage} className="app-select form-control" required style={{fontSize: "15px", height: "40px"}}>
                                                    <option data-display="Choose locations">Choose locations</option>
                                                    <option className="Chicago">Chicago</option>
                                                    <option className="Hawaii">Hawaii</option>

                                                </select>
                                           
                                         
                                            </div>
                                          
                                            <div className="col-lg-12 d-flex justify-content-end">
                                               <button onClick={this.displayResults} className="primary-btn mt-50" style={{height: '45px', marginLeft: '95px'}} >
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
		</div>
            </div>
        );
    }
}

export default Home2;