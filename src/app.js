import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import Layout from 'layouts/layout';

// Home
import Home from 'ui/home'

//Content 

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'));