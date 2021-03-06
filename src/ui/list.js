import React from 'react';
import { Link } from 'react-router';
import { getContacts, deleteContact, createContact } from 'api/contacts'

//THERE ARE TWO GENERAL TYPES OF COMPONENTS WITHIN YOUR COMPONENT. 1ST TYPE HANDLES STATE AND RENDERS THE ENTIRE COMPOENT. THIS FIRST TYPE OF COMPONENT
//TYPICALLY IS CALLED A 'CONTAINER'. THE SECOND COMPONENT IS USUALLY THE LAYOUT COMPONENT FOR THIS SPECIFIC COMPONENT. USUALLY IS JSX HEAVY. 

//THE CONTAINER COMPONENT TYPICALLY PASSES STATE THROUGH A THING CALLED 'PROPS' TO THE SECOND, LAYOUT COMPONENT



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
            this.props.rerender()
        })
    },

    render: function() {
        return (
            <div>
                <div id="listHeader">My Peeps</div>
                <div id="listContainer">
                    {this.props.contacts.map(item => {
                        return (
                            <div key={item.id} className="listItem">
                                <img className="avatar" src={item.picture.thumbnail}/>
                                <Link to={"/profiles/" + item.id} className="listName">{item.name.first + " " + item.name.last}</Link>
                                <button className="delButton" id={`d${item.id}`} onClick={this.deleteContact}>Delete</button>
                            </div>
                        )
                    })}   
                </div>
                <div className="createButtonDiv">
                    <Link to="/contactForm/">
                        <button className="createButton">Create Contact</button>
                    </Link>
                </div>
            </div>
        )
    }
})

export default ContactListContainer 

//'EXPORT DEFAULT' IS USED TO EXPORT YOUR DESIRED COMPONENT. WHATEVER COMPONENT YOU EXPORT 
//IS THE COMPONENT THAT WILL BE USED BY OTHER FILES IF THEY IMPORT THIS FILE. 









