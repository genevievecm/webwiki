import * as types from './actionTypes';
import { request } from '../api/request';

const loadCategories = (categories) => {
    return {
    	type: types.ACTION_TYPES.LOAD_CATEGORIES,
    	payload: {
            categories,
        }
    }
}

const getCategories = () => {
	return (dispatch) => {
		request('categories')
		.then(response => {
			dispatch(loadCategories(response));
		})
		.catch(error => {
			console.log(error);
			throw error;
		})
	}
}

export default getCategories;