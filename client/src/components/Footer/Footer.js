import React, { Component } from "react";
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-12  col-md-12 col-sm-12">
							<div className="single-footer-widget">
								<h6>About Us</h6>
								<p id="apt">
									An apartment swapping application for vacations on a budget.
								</p>
							</div>
						</div>
						
					</div>
					<div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
					
						<p className="footer-text m-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o colorlib" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" id="colorlib">Colorlib</a></p>
					
					</div>
				</div>
			</footer>	
            </div>
        );
    }
}

export default Footer;