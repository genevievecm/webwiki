import React from 'react';
import { Route, Router, hashHistory } from 'react-router'
import App from '../containers/App/App';
import Post from '../containers/Post/Post';

export default (
	<Router history={ hashHistory }>
    	<Route path="/webwiki" component={ App }/>
    	<Route path="/webwiki/post" component={ Post } />
  	</Router>
);