import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
	<div id={ styles.header }>
		<h1><Link to='/webwiki'>forge web wiki</Link></h1>
	</div>
);

export default Header;