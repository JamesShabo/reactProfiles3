import React from 'react'
import { Link } from 'react-router'
import data from 'assets/data/data.json'

// var namesHTML = ""
// var names = data.map(function(item) {
// 		`<li>${item.name.first}</li>`
// })

// console.log(names)

// console.log(data[0].name.first)

var string = ""

export default React.createClass({
	render: function() {
		return (
			<div id="listContainer">
    	  <ul>
        	{data.map(function(item, i) {
        		return <li id={i}><Link to="/profiles">{item.name.first}</Link></li>
        	})}	  
        </ul>
      </div>
		)
	}
})





