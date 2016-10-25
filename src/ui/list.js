import React from 'react';
import { Link } from 'react-router';
import { getContacts, deleteContact, createContact } from 'api/contacts'



const ContactListContainer = React.createClass({
	getInitialState: function() {
        return {
            contacts: []
        }
    },

    componentWillMount: function() {
       this.rerender() 
    },  

    rerender: function() {
        getContacts().then(resp =>  {
            console.log(resp)
            this.setState({
                contacts: resp.data
            })
        })
    },

    render: function() {
	
		return (
            <ContactList rerender={this.rerender} contacts={this.state.contacts} />
		)
	}
})


const ContactList = React.createClass({
    deleteContact: function(e) {
        var id = e.target.id.substr(1)

        deleteContact(id).then(resp => {
            this.props.rerender
        })
    },

    render: function() {
        return (
            <div>
                <div id="listHeader">My Peeps</div>
                <div id="listContainer">
                    {this.props.contacts.map(item => {
                        return (
                            <div className="listItem">
                                <img className="avatar" src={item.picture.thumbnail}/>
                                <Link to={"/profiles/" + item.id} className="listName">{item.name.first + " " + item.name.last}</Link>
                                <button id={`d${item.id}`} onClick={this.deleteContact}>Delete</button>
                                {console.log(item)}
                            </div>
                        )
                    })}   
                </div>
                <div>
                    <Link to="/contactForm/">
                        <button>create contact</button>
                    </Link>
                </div>
            </div>
        )
    }
})

export default ContactListContainer 









