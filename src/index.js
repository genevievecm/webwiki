import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux'
import App from './containers/App/App';

const store = configureStore({});

const render = (App) => {
	ReactDOM.render(
	  	<Provider store={ store }>
	  	  	<App />
	  	</Provider>,
	  	document.getElementById('app')
	);
}

render(App);