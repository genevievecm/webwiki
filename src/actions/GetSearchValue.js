import * as types from './constants';

const getSearchValue = (value) => {
	return (dispatch) => {
		dispatch({
			type: types.SEARCH_ACTIONS.REQUEST_SEARCH_VALUE_SUCCESS,
	    	payload: {
	    		value
	    	}
		})
	}
}

export default getSearchValue;