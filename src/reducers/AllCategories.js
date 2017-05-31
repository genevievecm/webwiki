import * as types from '../actions/constants';

const AllCategories = (state = [], action) => {
	switch (action.type){

		case types.WP_CONTENT_ACTIONS.REQUEST_WP_CONTENT_SUCCESS:
			return action.payload.categories;

		case types.WP_CONTENT_ACTIONS.REQUEST_WP_CONTENT_ERROR:
			return action.payload.error;

		default:
			return state;
	}
}


export default AllCategories;