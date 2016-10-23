import React from 'react';
import { Link } from 'react-router';
import data from 'assets/data/data.json';



export default React.createClass({
	render: function() {
	
		return (
            <div>
                <div id="listHeader">My Peeps</div>
    			<div id="listContainer">
                    {data.map(function(item,i) {
                    		
                    	return <div key={'list-' + i} className="listItem"><img className="avatar" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"/><Link to={"/profiles/" + item.id} className="listName">{item.name.first + " " + item.name.last}</Link></div>
                    })}	  
                </div>
            </div>
		)
	}
})





