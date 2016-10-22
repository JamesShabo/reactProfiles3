import React from 'react'
import { Link } from 'react-router'
import data from 'assets/data/data.json'

export default React.createClass({
	componentWillMount: function() {
		console.log('props', this.props)
	},
	render: function() {

		return (
			<ul>
				{data.filter((item) => {
					return item.id === Number(this.props.params.id)
				}).map(function(obj){
					return <li key={obj.id}>{obj.name.first}</li>
				})}
			</ul>
		)
	}
})

// <li>{item.email}</li>
// <li>{item.phone}</li>
// <li>{item.city} + ", " + {item.state}</li>