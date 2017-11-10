import React,{Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';
import Login from './Login';
import Home from './home';
import BookDetail from './BookDetail';
import BookList from './BookList';
import ReadingList from './ReadingList';
import Contact from './Contact';

const RoutingConfig = () =>(
		<Router>
			<div>
				<Route exact path="/" component={Login}/>
				<Route path="/home" component={Home}/>
				<Route path="/books/:bookid.html" component={BookDetail}/>
				<Route path="/books/list/:type?/:key?/:page?" component={BookList}/>
				<Route path="/books/readings/:page?" component={ReadingList} />
				<Route path="/contact" component={Contact} />
			</div>
		</Router>	
	);

export default RoutingConfig;