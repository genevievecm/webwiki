import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Categories from '../../layout/Categories/Categories';
import SinglePost from '../../layout/SinglePost/SinglePost';
import styles from './App.css';

const App = () => (
	<Switch>
		<Route exact path='/webwiki' component={ Categories }/>
		<Route exact path='/webwiki/post/:id' component={ SinglePost }/>
    </Switch>
);


export default App;