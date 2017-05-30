import * as types from './constants';
import * as urls from '../api/config';
import { request } from '../api/request';
import { pending } from './PendingRequest';
import { flatten } from '../utils/_flatten-array';

const loadCategoriesAndPosts = (categories) => {

	const posts = flatten(categories.map(cat => cat.posts));

    return {
    	type: types.WP_CONTENT_ACTIONS.REQUEST_WP_CONTENT_SUCCESS,
    	payload: {
            categories,
            posts
        }
    }
}

const categoriesAndPostsError = (error) => {
	return {
		type: types.WP_CONTENT_ACTIONS.REQUEST_WP_CONTENT_ERROR,
		payload: {
			error
		}
	}
}

const getCategoriesAndPosts = () => {

	return (dispatch) => {

		// loading...
		dispatch(pending(status = true));

		request(urls.REQUEST_URLS.WP_API_CUSTOM_ENDPOINT, 'categories') // perform api call
		.then(response => dispatch(loadCategoriesAndPosts(response))) // get data from api
		.then(() => dispatch(pending(status = false))) // loading complete
		.catch(error => dispatch(categoriesAndPostsError(error))) // return any errors
	}
}

export default getCategoriesAndPosts;