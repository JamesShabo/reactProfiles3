import React from 'react'
import { hashHistory } from 'react-router'
import { createContact } from 'api/contacts'

export default React.createClass({
	getInitialState: function() {
        return {
        	first: "",
        	last: "",
        	email: "",
        	phone: "",
        	city: "",
        	state: "",
        	large: ""
		}	
    },

    update: function(e) {
    	var obj = this.state;
    	var id = e.target.id;

    	obj[id] = e.target.value;
   
		
		this.setState(obj);
    },

    postToAPI: function() {
    	var obj = {
        	name: {
        		first: this.state.first,
				last: this.state.last,	
        	},
			phone: this.state.phone,
			email: this.state.email,
			location: {
				city: this.state.city,
				state: this.state.state
			},
			picture: {
				large: this.state.large
			}

		}
    	createContact(obj).then(function(resp){
    		hashHistory.push('/')
    	})
    },

    render: function() {
		return (
			<form>
				<input id="first" onChange={this.update} type="text" placeholder="first name"></input>
				<input id="last" onChange={this.update} type="text" placeholder="last name"></input>
				<input id="email" onChange={this.update} type="text" placeholder="email"></input>
				<input id="phone" onChange={this.update} type="text" placeholder="phone"></input>
				<input id="city" onChange={this.update} type="text" placeholder="city"></input>
				<input id="state" onChange={this.update} type="text" placeholder="state"></input>
				<input id="large" onChange={this.update} type="file"></input>
				<button onClick={this.postToAPI}>create new contact</button>
			</form>
		)
	}
})



// <input value={this.state.lname} onChange={this.update} type="text"></input>
