import * as types from '../actions/actionTypes';

const GetAllCategories = (state = [], action) => {
	switch (action.type){

		case types.ACTION_TYPES.LOAD_CATEGORIES:
			// debugger;
			return action.payload.categories;

		default:
			return state;
	}
}

export default GetAllCategories;
