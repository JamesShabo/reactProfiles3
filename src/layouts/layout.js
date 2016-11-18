import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <div id="container">
        <div id="header"></div>
        	{this.props.children}
      </div>
    )
  }
})

//LAYOUT IS A STATIC COMPONENT THAT IS TYPICALLY USED FOR FOOTERS, HEADERS, SIDE BARS, ETC. 
//{this.props.childrem} ALLOWS FOR OTHER NESTED COMPONENTS TO RENDER WITHIN THIS STATIC COMPONENT 
//WITHOUT {this.props.children} YOU WON'T BE ABLE TO RENDER THE OTHER COMPONENTS















































// import React from 'react';
// import { Link } from 'react-router';

// export default React.createClass({
//   render: function() {


//     return (
//       <div id="container">
//         <div id="header">
//           Contacts
//         </div>
//         <div id="content">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// });