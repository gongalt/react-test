import React from 'react';

import './App.css';
import { Route } from 'react-router';
import Header from './components/header/Header';

import { LoginForm, SignupForm, Dashboard } from './pages';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Route exact path="/register">
				<SignupForm />
			</Route>
			<Route exact path="/login">
				<LoginForm />
			</Route>
			<Route exact path="/home">
				<Dashboard />
			</Route>
		</div>
	);
};

export default App;
