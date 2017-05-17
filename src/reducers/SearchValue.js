import * as types from '../actions/constants';

const initialState = {
	value: ''
}

export const SearchValue = (state = initialState, action) => {
	switch (action.type){

		case types.SEARCH_ACTIONS.REQUEST_SEARCH_VALUE_SUCCESS:
			return Object.assign({}, state, { value: action.payload.value });

		default:
			return state;
	}
}

export default SearchValue;