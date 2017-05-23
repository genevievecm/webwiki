import * as types from './constants';

const getFilteredPosts = (posts) => {

	return (dispatch) => {
		dispatch({
			type: types.POSTS_ACTIONS.REQUEST_FILTERED_POSTS_SUCCESS,
			payload: {
				posts
			}
		});
	}
}

export default getFilteredPosts;