import React from 'react';
import Router from 'react-router';
import {
	App
,	IndexPage
,	UserPage
,	LoginPage
,	RegisterPage
,	TodosPage
} from './components';

const Route = Router.Route;
const router = Router.create({
  routes: [
	<Route handler={App}>
		<Route path="/" handler={IndexPage}></Route>
		<Route path="/me" handler={UserPage}></Route>
		<Route path="/login" handler={LoginPage}></Route>
		<Route path="/register" handler={RegisterPage}></Route>
		<Route path="/my/todos" handler={TodosPage}></Route>
	</Route>
	]
});

export default router;

/*
	<Route path="/my/todos/:status" handler={TodoPage}></Route>
	
*/