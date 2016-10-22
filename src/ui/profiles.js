import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
	render: function() {
		return (
			<div>
				<h1>I'm back</h1>
				<li><Link to="/">Back to list</Link></li>
			</div>
		)
	}
})