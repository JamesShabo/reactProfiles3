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
			email: "",
			location: {
				city: "",
				state: ""
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
				<input onChange={(e) => this.update("city",e, "location")} type="text" placeholder="city"></input>
				<input onChange={(e) => this.update("state",e, "location")} type="text" placeholder="state"></input>
				<button onClick={this.postToAPI}>submit</button>
			</form>
		)
	}
})



// <input value={this.state.lname} onChange={this.update} type="text"></input>
