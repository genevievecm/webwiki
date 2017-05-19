import * as types from '../actions/constants';

const FilteredPosts = (state = ['no results'], action) => {
	switch (action.type){
		case types.POSTS_ACTIONS.REQUEST_FILTERED_POSTS_SUCCESS:
			return action.payload.filteredposts;

		case types.POSTS_ACTIONS.REQUEST_FILTERED_POSTS_ERROR:
			return action.payload.error;

		default:
			return state;
	}
}


export default FilteredPosts;