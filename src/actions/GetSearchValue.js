import * as types from './constants';

const getSearchValue = (text, filter, categories) => {

	return (dispatch) => {
		dispatch({
			type: types.SEARCH_ACTIONS.REQUEST_SEARCH_VALUE_SUCCESS,
	    	payload: {
	    		text,
	    		filter,
	    		categories,
	    	}
		});
	}
}

export default getSearchValue;