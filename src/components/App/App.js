import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from '../Categories/Categories';
import styles from './App.css';

const App = () => {
    return (
        <div id={ styles.container }>
            <Categories />
        </div>
    );
}

export default App;