import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import 'assets/styles/style.css' //BRINGING IN STYLES

//LAYOUT - A COMPONENT THAT ACTS AS YOUR LAYOUT FOR OTHER COMPONENTS
import Layout from 'layouts/layout'

//COMPONENT CONTENT
import List from 'ui/list'
import Form from 'ui/createContact'
import Profile from 'ui/profilesDetail'


//<ROUTER> TAGS ARE USED FOR REACT-ROUTER. THEY DEFINE PATHS AND THE COMPONENTS THOSE PATHS CORRESPOND TO. 
//THERE ARE TWO TYPES OF ROUTER TAGS, <ROUTER> AND <ROUTE>
//the .render METHOD HAS TWO ARGUMENTS, THE FIRST BEING THE ROUTES AND THE SECOND BEING WHERE IN THE HTML THE ROUTES RENDER
ReactDOM.render(( 
	<Router history={hashHistory}> 
		<Route component={Layout}>
			<Route path="/" component={List}/>
			<Route path="/profiles/:id" component={Profile}/>
			<Route path="/contactForm/" component={Form}/>
		</Route>
	</Router>), document.getElementById("app"))


//THIS FILE RENDERS YOUR FINAL APPLICATION ON A BROWSER.


