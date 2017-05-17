import * as types from './constants';

const loadSinglePost = (post) => {
    return {
    	type: types.SINGLEPOST_ACTIONS.REQUEST_SINGLEPOST_SUCCESS,
    	payload: {
            post,
        }
    }
}

const getPosts = () => {

	return (dispatch) => {

		// loading
		dispatch(pending(status = true));

		request(urls.REQUEST_URLS.WP_API_BASE_URL, 'posts/'+id)
		.then(response => dispatch(loadSinglePost(response))) // get data
		.catch(error => dispatch(singlePostError(error))) // get any errors
	}
}

export default getPosts;