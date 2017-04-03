import { combineReducers } from 'redux';
import GetAllCategories from './GetAllCategories';

const rootReducer = combineReducers({
	categories: GetAllCategories,
});

// debugger;
export default rootReducer;