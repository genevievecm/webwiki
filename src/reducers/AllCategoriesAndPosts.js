import * as types from '../actions/constants';

const AllCategoriesAndPosts = (state = [], action) => {
	switch (action.type){

		case types.WP_CONTENT_ACTIONS.REQUEST_WP_CONTENT_SUCCESS:
			return action.payload;

		case types.WP_CONTENT_ACTIONS.REQUEST_WP_CONTENT_ERROR:
			return action.payload.error;

		default:
			return state;
	}
}


export default AllCategoriesAndPosts;