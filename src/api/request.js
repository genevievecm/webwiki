import 'whatwg-fetch';

export const request = (url, param) => 
	fetch(url+(param ? param : ''))
	.then(response => response.json());