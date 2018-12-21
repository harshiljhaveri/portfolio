import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{
	render(){
		return(
			<div>
				<nav className = "logo">
					<div>
						<h1>AYUSH SHAH</h1>
						<div className="contact">
							<span>
							<ion-icon name="mail"></ion-icon><span className="email"><a href="#">shah.ayush100@gmail.com</a>  |</span>  
							</span>
							
							<span>
							<ion-icon name="call"></ion-icon><span className="email"><a href="#">+91 8369853158</a>     |</span>
							</span>
							
							<span>
							<ion-icon name="logo-github"></ion-icon><span className="email"><a href="https://github.com/paceite">http://github.com/paceite</a></span>
							</span>
						</div>
					</div>
				</nav>
			</div>
			);
	}
}

export default Navbar;