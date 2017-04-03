import * as types from './actionTypes';
import get from '../api/request';

const loadCategories = (categories) => {
    // debugger;
    return {
    	type: types.ACTION_TYPES.LOAD_CATEGORIES,
    	payload: {
            categories,
        }
    }
}

const getCategories = () => {
	return dispatch => {
		get('categories')
		.then(response => {
            // debugger;
			dispatch(loadCategories(response));
			return response;
		})
		.catch(error => {
			console.log(error);
			throw error;
		});
	}
}

export default getCategories;