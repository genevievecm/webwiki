import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Categories from '../../content/Categories/Categories';
import SinglePost from '../../content/SinglePost/SinglePost';
import Header from '../Header/Header';
import styles from './App.css';

const App = () => (
	<div className={ styles.container }>
		<Header />
		<div id={ styles.main }>
			<Switch>
				<Route exact path='/webwiki' component={ Categories }/>
				<Route exact path='/webwiki/post/:id' component={ SinglePost }/>
		    </Switch>
	    </div>
    </div>
);


export default App;