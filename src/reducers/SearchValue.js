import * as types from '../actions/constants';
import { filter } from '../utils/_filterArray';

const initialState = {
	text: '',
	filter: 'posts',
	results: [],
}

export const SearchValue = (state = initialState, action) => {
	switch (action.type){

		case types.SEARCH_ACTIONS.REQUEST_SEARCH_VALUE_SUCCESS:

			let results = [];

			console.log(action.payload)
			
			// if searching posts
			if (action.payload.filter === 'posts'){

				action.payload.categories.map(cat => {

					// create new category object with filtered posts
					let obj = Object.assign({}, cat, { 
						posts: filter(cat.posts, action.payload.text) 
					});

					// if category has matching posts, add to results array
					if (obj.posts.length >= 1) results.push(obj);

				});
			}

			// if searching categories
			if (action.payload.filter === 'categories') {
				results = filter(action.payload.categories, action.payload.text)
			}

			// if search bare is empty
			if (action.payload.text.length < 1) results = [];

			return Object.assign({}, state, {
					text: action.payload.text, 
					filter: action.payload.filter,
					results: results, 
				}
			);

		default:
			return state;
	}
}

export default SearchValue;