import React, { Component } from 'react';
import { WP_API_BASE_URL } from '../../api/config';
import 'whatwg-fetch';

export default class App extends Component {

	componentDidMount(){
		fetch(WP_API_BASE_URL, {
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

  render() {
    return <h2>hu</h2>;
  }
}