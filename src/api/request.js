import { WP_API_CUSTOM_ENDPOINT } from './config';
import 'whatwg-fetch';

const request = (param) => {
	return fetch(WP_API_CUSTOM_ENDPOINT+(param ? param : ''), {
		method: 'get'
	})
	.then(function(response) {
		return response.json();
	})
}

export default request;