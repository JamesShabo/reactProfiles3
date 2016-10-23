import React from 'react'
import { Link } from 'react-router'
import data from 'assets/data/data.json'

export default React.createClass({
	render: function() {

		return (
			<div>
				<ul>
					{data.filter(function(item) {
						return item.id === Number(this.props.params.id)
					}.bind(this)).map(function(obj){
						return <li key={obj.id}>{obj.name.first}</li>
					})}
				</ul>
				<Link to="/">Back to list!</Link>
			</div>
		)
	}
})

// <li>{item.email}</li>
// <li>{item.phone}</li>
// <li>{item.city} + ", " + {item.state}</li>