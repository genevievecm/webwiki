import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import GetAllCategories from './GetAllCategories';

const rootReducer = combineReducers({
	routing: routerReducer,
	categories: GetAllCategories,
});

// debugger;
export default rootReducer;