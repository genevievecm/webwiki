import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import Search from '../../form/Search/Search';

const Header = () => (
	<div id={ styles.header }>
		<h1><Link to='/webwiki'>// web wiki</Link></h1>
		<Search />
	</div>
);

export default Header;