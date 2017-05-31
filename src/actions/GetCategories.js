import * as types from './constants';
import * as urls from '../api/config';
import { request } from '../api/request';
import { pending } from './PendingRequest';
import { flatten } from '../utils/_flattenArray';

const loadCategories = (categories) => {

	const posts = flatten(categories.map(cat => cat.posts));

    return {
    	type: types.WP_CONTENT_ACTIONS.REQUEST_WP_CONTENT_SUCCESS,
    	payload: {
            categories,
        }
    }
}

const categoriesError = (error) => {
	return {
		type: types.WP_CONTENT_ACTIONS.REQUEST_WP_CONTENT_ERROR,
		payload: {
			error
		}
	}
}

const getCategories = () => {

	return (dispatch) => {

		// loading...
		dispatch(pending(status = true));

		request(urls.REQUEST_URLS.WP_API_CUSTOM_ENDPOINT, 'categories') // perform api call
		.then(response => dispatch(loadCategories(response))) // get data from api
		.then(() => dispatch(pending(status = false))) // loading complete
		.catch(error => dispatch(categoriesError(error))) // return any errors
	}
}

export default getCategories;