import React, { Component } from "react";
class Home extends Component {
    render() {
        return (
            <div>
            <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-center" style={{height: 915}}>
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
                                                    <h4 className="search-title">Search Properties</h4>
                                                </div>
                                                <div className="col">
                                                    <div className="onoffswitch3 d-block mx-auto">
                                                        <input type="checkbox" name="onoffswitch3" className="onoffswitch3-checkbox" id="myonoffswitch3" checked></input>
                                                            <label className="onoffswitch3-label" for="myonoffswitch3">
                                                                <span className="onoffswitch3-inner">
                                                                    <span className="onoffswitch3-active">
                                                                        <span className="onoffswitch3-switch">Swap</span>
                                                                        <span className="lnr lnr-arrow-right"></span>
                                                                    </span>
                                                                    <span className="onoffswitch3-inactive">
                                                                        <span className="lnr lnr-arrow-left"></span>
                                                                        <span className="onoffswitch3-switch">Search</span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-xs-6">
                                                <select name="location" className="app-select form-control" required>
                                                    <option data-display="Choose locations">Choose locations</option>
                                                    <option value="1">Chicago</option>
                                                    <option value="2">Hawaii</option>

                                                </select>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-xs-6">
                                                <select name="property-type" className="app-select form-control" required>
                                                    <option data-display="Property Type">Property Type</option>
                                                    <option value="1">House</option>
                                                    <option value="2">Apartment</option>

                                                </select>
                                            </div>

                                            <div className="col-lg-4 col-md-6 col-xs-6">
                                                <select name="bedroom" className="app-select form-control" required>
                                                    <option data-display="Bedrooms">Bedrooms</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div className="col-lg-12 d-flex justify-content-end">
                                                <button className="primary-btn mt-50" style={{height: 45}}>Search Properties<span className="lnr lnr-arrow-right"></span></button>
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
            </div>
        );
    }
}

export default Home;