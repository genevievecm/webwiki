import * as types from '../actions/constants';

const AllCategories = (state = [], action) => {
	switch (action.type){

		case types.CATEGORY_ACTIONS.REQUEST_CATEGORIES_SUCCESS:
			return action.payload.categories;

		case types.CATEGORY_ACTIONS.REQUEST_CATEGORIES_ERROR:
			return action.payload.error;

		default:
			return state;
	}
}


export default AllCategories;