import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Pending from './Pending';
import AllCategories from './AllCategories';
import FilteredPosts from './FilteredPosts';
import SinglePost from './SinglePost';
import SearchValue from './SearchValue';

const rootReducer = combineReducers({
	routing: routerReducer,
	pending: Pending,
	categories: AllCategories,
	filteredposts: FilteredPosts,
	singlepost: SinglePost,
	searchvalue: SearchValue,
});

export default rootReducer;