import React from 'react';
import { Link } from 'react-router';
import { getContacts } from 'api/contacts'



const ContactListContainer = React.createClass({
	getInitialState: function() {
        return {
            contacts: []
        }
    },

    componentWillMount: function() {
        getContacts().then(resp =>  {
            console.log(resp)
            this.setState({
                contacts: resp.data
            })
        })
    },  

    render: function() {
	
		return (
            <ContactList contacts={this.state.contacts} />
		)
	}
})



const ContactList = React.createClass({
    render: function() {
        return (
            <div>
                <div id="listHeader">My Peeps</div>
                <div id="listContainer">
                    {this.props.contacts.map(function(item) {
                        return (
                            <div className="listItem">
                                <img className="avatar" src={item.picture.thumbnail}/>
                                <Link to={"/profiles/" + item.id} className="listName">{item.name.first + " " + item.name.last}</Link>
                            </div>
                        )
                    })}   
                </div>
            </div>
        )
    }
})

export default ContactListContainer 