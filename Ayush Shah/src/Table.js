import React from 'react';
import'./Header.css';
class Table extends React.Component{
	render(){
		return(
			<div>
				<table>
					<tr>
						<td><h4>Qualification</h4></td>
						<td><h4><span className="qual">Board/University</span></h4></td>
						<td><h4><span className="grade">Grade</span></h4></td>
					</tr>
					<tr>
						<td><span className="be">B.E</span></td>
						<td><span className="dj">D.J.Sanghvi College of Engineering</span></td>
						<td>9.335 CGPA</td>
					</tr>
					<tr>
						<td><span className="be">12<sup>th</sup></span></td>
						<td><span className="dj">Pace Junior Science College</span></td>
						<td>86%</td>
					</tr>
					<tr>
						<td><span className="be">10<sup>th</sup></span></td>
						<td><span className="dj">Rustomjee International School</span></td>
						<td>94.8%</td>
					</tr>
				</table>
			</div>
			);
	}
}

export default Table;