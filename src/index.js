import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

// Router
import { BrowserRouter } from 'react-router-dom';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);