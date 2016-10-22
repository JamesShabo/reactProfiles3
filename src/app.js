import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import Layout from 'layouts/layout';

// Home
import Home from 'ui/home'

//Content 
import List from 'ui/list'
import Profiles from 'ui/profiles'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Layout}>
      <Route path="/" component={List}/>
      <Route path="/profiles" component={Profiles}/>
    </Route>
  </Router>
), document.getElementById('app'));