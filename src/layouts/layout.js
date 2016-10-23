import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {


    return (
      <div id="container">
        <div id="header">
          Contacts
        </div>
        <div id="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});