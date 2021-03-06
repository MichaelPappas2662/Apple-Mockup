import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../view/home';
import Nav from '../components/nav';


function App() {
	return (
			<Router>
				<div className='App'>
					<Nav />
					<Switch>
             			 <Route path='/' exact component={Home} />
				
					</Switch>
				</div>
			</Router>
	);
}

export default App;
