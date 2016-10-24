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





