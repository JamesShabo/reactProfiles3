import React from 'react'
import { Link } from 'react-router'
import data from 'assets/data/data.json'
import 'font-awesome/css/font-awesome.css'

export default React.createClass({
	render: function() {	

		return (
			<div>
				{data.filter(function(item) {
					return item.id === Number(this.props.params.id)
					}.bind(this)).map(function(obj){
						return (
							<div>
								<div className="profileBanner">
									<img className="avatarBanner" src={obj.picture.large}/>
									<Link to="/" className="noDecoration">
										<i className="fa fa-arrow-left" aria-hidden="true"></i>
									</Link>
								</div>	
								<div>
									<div className="listItem profileItem"><i className="fa fa-user faProfile" aria-hidden="true"></i>{obj.name.first + " " + obj.name.last}</div>
									<div className="listItem profileItem"><i className="fa fa-envelope faProfile" aria-hidden="true"></i>{obj.email}</div>
									<div className="listItem profileItem"><i className="fa fa-mobile faProfile" aria-hidden="true"></i>{obj.cell}</div>
									<div className="listItem profileItem"><i className="fa fa-globe faProfile" aria-hidden="true"></i>{obj.location.city + ", " + obj.location.state}</div>
								</div>
							</div>
						) 	
				})}
			</div>
		)
	}
})





// <li>{item.email}</li>
// <li>{item.phone}</li>
// <li>{item.city} + ", " + {item.state}</li>

// <div className="profileBanner">
// 					<img className="avatarBanner" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"/>
// 					<Link to="/" className="noDecoration">
// 						<i className="fa fa-arrow-left" aria-hidden="true"></i>
// 					</Link>
// 				</div>	