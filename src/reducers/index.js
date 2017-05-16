import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Pending from './Pending';
import AllCategories from './AllCategories';
import SinglePost from './SinglePost';

const rootReducer = combineReducers({
	routing: routerReducer,
	pending: Pending,
	categories: AllCategories,
	singlepost: SinglePost,
});

export default rootReducer;