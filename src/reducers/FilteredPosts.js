import * as types from '../actions/constants';

const FilteredPosts = (state = [], action) => {
	switch (action.type){
		case types.POSTS_ACTIONS.REQUEST_FILTERED_POSTS_SUCCESS:
			return action.payload.posts;

		case types.POSTS_ACTIONS.REQUEST_FILTERED_POSTS_ERROR:
			return action.payload.error;

		default:
			return state;
	}
}


export default FilteredPosts;