import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Pending from './Pending';
import AllCategoriesAndPosts from './AllCategoriesAndPosts';
import FilteredPosts from './FilteredPosts';
import SinglePost from './SinglePost';
import SearchValue from './SearchValue';

const rootReducer = combineReducers({
	routing: routerReducer,
	pending: Pending,
	wp_content: AllCategoriesAndPosts,
	filteredposts: FilteredPosts,
	singlepost: SinglePost,
	searchvalue: SearchValue,
});

export default rootReducer;