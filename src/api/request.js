import { WP_API_BASE_URL } from './config';
import 'whatwg-fetch';

const request = (param) => {
	return fetch(WP_API_BASE_URL+(param ? param : ''), {
		method: 'get'
	})
	.then(function(response) {
		return response.json();
	})
}

export default request;