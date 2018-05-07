import React, { Component } from "react";
import Friendlist from "../../Friendlist"
import Events from "../../Events"
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
									 Spend your money on what you truly care about it and leave the housing concerns to us. Holiday
									 provides you with the opportunity to spend your vacation budget where it matters most.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 pb-30">
							<div className="single-service">
								<h4><span className="lnr lnr-license"></span>Professional Service</h4>
								<p>
								We help connect travelers all over the world so they can discover rustic, authentic,
									  and unspoiled gems. Do what the locals do, eat where they eat, and experience 
									  the realness of the place you're visiting.
								</p>								
							</div>
						</div>
						<div className="col-lg-4 col-md-6 pb-30">
							<div className="single-service">
								<h4><span className="lnr lnr-phone"></span>Easy Access</h4>
								<p>
									Access our application from any device, on the go or at home. Read and write reviews of past visits to prepare
									other users for their stay. Save favorite homes so you can easily revisit them when you're ready to swap.
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
							<h1>Checkout Local Activities</h1>
							<p>
								Need some help choosing how to spend your Holiday?
							</p>
						</div>
					</div>
					<Events />
				</div>	
			</section>
		</div>
		</div>
            </div>
        );
    }
}

export default Home2;