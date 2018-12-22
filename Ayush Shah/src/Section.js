import React from 'react';
import './Section.css';
class Section extends React.Component{
	render(){
		return(
			<div className="section">
				<h2>TECHNICAL STACK</h2>
				<div className="row">
					<div>
						<span>
							<ion-icon name="logo-html5"></ion-icon>
						</span>
						<h4>HTML</h4>
					</div>
					<div>
						<span>
							<ion-icon name="logo-css3"></ion-icon>
						</span>
						<h4>CSS</h4>
					</div>
					<div>
						<span>
							<ion-icon name="logo-javascript"></ion-icon>
						</span>
						<h4>JavaScript</h4>
					</div>
					<div>
						<span>
							<ion-icon name="logo-python"></ion-icon>
						</span>
						<h4>Python</h4>
					</div>
					
				</div>
			</div>
			);
	}
}

export default Section;