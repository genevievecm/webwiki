import * as types from './constants';
import * as urls from '../api/config';
import { request } from '../api/request';
import { pending } from './PendingRequest';

const loadCategories = (categories) => {
    return {
    	type: types.CATEGORY_ACTIONS.REQUEST_CATEGORIES_SUCCESS,
    	payload: {
            categories,
        }
    }
}

const categoriesError = () => {
	return {
    	type: types.CATEGORY_ACTIONS.REQUEST_CATEGORIES_ERROR,
    	payload: error
    }
}

const getCategories = () => {
	debugger;
	return (dispatch) => {

		// loading...
		dispatch(pending(status = true));

		request(urls.REQUEST_URLS.WP_API_CUSTOM_ENDPOINT, 'categories') // perform api call
		.then(response => dispatch(loadCategories(response))) // get data
		.then(() => dispatch(pending(status = false))) // loading complete
		.catch(error => dispatch(categoriesError(error))) // return any errors
	}
}

export default getCategories;