import WP_API_BASE_URL from './config';
import 'whatwg-fetch';

export function request(endpoint, method = 'GET') {
	return fetch(WP_API_BASE_URL, {
		method: 'get'
	}).then(function(response) {
		return response.json();
	})
	.then(function(parsedData) {
	    console.log(parsedData);
	}).catch(function(err) {
		console.log(err);
	});
}