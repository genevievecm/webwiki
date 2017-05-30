import * as types from './constants';

const getSearchValue = (text, posts) => {

	return (dispatch) => {
		dispatch({
			type: types.SEARCH_ACTIONS.REQUEST_SEARCH_VALUE_SUCCESS,
	    	payload: {
	    		text,
	    		posts
	    	}
		});
	}
}

export default getSearchValue;