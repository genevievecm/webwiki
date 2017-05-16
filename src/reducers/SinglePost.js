import * as types from '../actions/constants';

const SinglePost = (state = {}, action) => {
	switch (action.type){

		case types.SINGLEPOST_ACTIONS.REQUEST_SINGLEPOST_SUCCESS:
			return action.payload.post;

		case types.SINGLEPOST_ACTIONS.REQUEST_SINGLEPOST_ERROR:
			return action.payload.error;

		default:
			return state;
	}
}

export default SinglePost;