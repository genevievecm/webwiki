import * as types from './constants';
import * as urls from '../api/config';
import { request } from '../api/request';
import { pending } from './PendingRequest';

const loadSinglePost = (post) => {
    return {
    	type: types.SINGLEPOST_ACTIONS.REQUEST_SINGLEPOST_SUCCESS,
    	payload: {
            post,
        }
    }
}

const singlePostError = () => {
	return {
    	type: types.SINGLEPOST_ACTIONS.REQUEST_SINGLEPOST_ERROR,
    	payload: error
    }
}

const getSinglePost = (id) => {

	return (dispatch) => {

		// loading...
		dispatch(pending(status = true));

		request(urls.REQUEST_URLS.WP_API_BASE_URL, 'posts/'+id)
		.then(response => dispatch(loadSinglePost(response))) // get api data
		.then(() => dispatch(pending(status = false))) // loading completed
		.catch(error => dispatch(singlePostError(error))) // get any errors
	}
}

export default getSinglePost;