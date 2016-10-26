import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import 'assets/styles/style.css'


// Layouts
import Layout from 'layouts/layout';

//Content 
import List from 'ui/list'
import ProfilesDetail from 'ui/profilesDetail'
import CreateContact from 'ui/createContact'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={Layout}>
      <Route path="/" component={List}/>
      <Route path="/profiles/:id" component={ProfilesDetail}/>
      <Route path="/contactForm/" component={CreateContact}/>
    </Route>
  </Router>
), document.getElementById('app'));


