import React from 'react'
import { Link } from 'react-router'
import { createContact } from 'api/contacts'

export default React.createClass({
	getInitialState: function() {
        return {
        	name: {
        		fname: "",
				lname: "",	
        	},
			phone: "",
			email: "",
			location: {
				city: "",
				state: ""
			},
			picture: {
				large: ""
			}

		}	
    },

    update: function(property, e,key) {
    	var obj = this.state

    	if(key) {
    		obj[key][property] = e.target.value;
    	}
    	else {
    		obj[property] = e.target.value;
    	}
		
		this.setState(obj);
    },

    postToAPI: function() {
    	createContact(this.state)
    },

    render: function() {
		return (
			<form>
				<input onChange={(e) => this.update("fname",e,"name")} type="text" placeholder="first name"></input>
				<input onChange={(e) => this.update("lname",e,"name")} type="text" placeholder="last name"></input>
				<input onChange={(e) => this.update("email",e)} type="text" placeholder="email"></input>
				<input onChange={(e) => this.update("phone",e)} type="text" placeholder="phone"></input>
				<input onChange={(e) => this.update("city",e, "location")} type="text" placeholder="city"></input>
				<input onChange={(e) => this.update("state",e, "location")} type="text" placeholder="state"></input>
				<input onChange={(e) => this.update("large",e, "picture")} type="file"></input>
				<button onClick={this.postToAPI}>create new contact</button>
			</form>
		)
	}
})



// <input value={this.state.lname} onChange={this.update} type="text"></input>
