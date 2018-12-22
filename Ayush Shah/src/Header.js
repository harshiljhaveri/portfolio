import React from 'react';
import './Header.css';
import Table from './Table';

class Header extends React.Component{
	render(){
		return(
			<div>
				<header>
					<div>
						<div className = "about">
						<br />
						<h2>ABOUT ME</h2>
						<p>
							I am a Second Year Engineering student, currently studying in Dwarkadas J. Sanghvi College of Engineering.I am interested in Web Development, and aim to become a full-stack web developer.I have learned front end HTML, CSS, JavaScript.I have also learned Bootstrap,jQuery and ReactJS.This portfolio is made using ReactJS.Please click on the above Github link to view my past work. Thank you! :)
						</p>
						</div>
						<div className = "education">
							<br />
							<h2>EDUCATION</h2>
							<Table />
						</div>
					</div>	
				</header>
			</div>
			);
	}
}

export default Header;