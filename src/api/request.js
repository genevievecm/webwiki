import { WP_API_CUSTOM_ENDPOINT } from './config';
import 'whatwg-fetch';

export const request = param => 
	fetch(WP_API_CUSTOM_ENDPOINT+(param ? param : ''))
	.then(response => response.json())