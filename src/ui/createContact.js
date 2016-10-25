import React from 'react'
import { Link } from 'react-router'
import { createContact } from 'api/contacts'

export default React.createClass({
	getInitialState: function() {
        return {
			fname: ""
		}	
    },

    update: function(e) {
		this.setState({
			fname: e.target.value
		})
    },

    postToAPI: function() {
    	createContact(this.state)
    },

    render: function() {
		return (
			<form>
				<input value={this.state.fname} onChange={this.update} type="text"></input>
				<button onClick={this.postToAPI}>submit</button>
			</form>
		)
	}
})



// <input value={this.state.lname} onChange={this.update} type="text"></input>
