import * as types from './actionTypes';
import { request } from '../api/request';

const loadCategories = (categories) => {
    // debugger;
    return {
    	type: types.ACTION_TYPES.LOAD_CATEGORIES,
    	payload: {
            categories,
        }
    }
}

const getCategories = (dispatch) => {
	request('categories')
	.then(response => {
        // debugger;
		dispatch(loadCategories(response));
		// return response;
	})
	// .catch(error => {
	// 	console.log(error);
	// 	throw error;
	// })
}

export default getCategories;