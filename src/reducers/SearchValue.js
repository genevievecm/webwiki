import * as types from '../actions/constants';

const initialState = {
	text: '',
	posts: [],
}

export const SearchValue = (state = initialState, action) => {
	switch (action.type){

		case types.SEARCH_ACTIONS.REQUEST_SEARCH_VALUE_SUCCESS:
			
			// filtered posts array
			let filtered = [];

			// if there is no text in search box, empty filtered posts array
			action.payload.text.length < 1 ?
				filtered = [] :
				filtered = action.payload.posts.filter(post => post.post_title.toLowerCase().includes(action.payload.text.toLowerCase()));

			return Object.assign({}, state, { 
				text: action.payload.text, 
				posts: filtered, 
			});

		default:
			return state;
	}
}

export default SearchValue;