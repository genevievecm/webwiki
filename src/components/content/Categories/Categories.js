import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCategories from '../../../actions/GetCategories';
import Posts from '../Posts/Posts';
import Loader from '../../common/Loader/Loader';
import styles from './Categories.css';

// get state from redux store
const mapStateToProps = (state) => {
    return ({
        pending: state.pending,
        categories: state.categories,
        search: state.searchvalue, // text, filter, results
    });
}

// execute operation and update store
const mapDispatchtoProps = {
    getCategories,
};

class Categories extends Component {

    // get categories from WP api
    componentWillMount() {
    	this.props.getCategories();
    }

    render() {

        if (this.props.pending) return <Loader />; // loading icon...

        const data = this.props.search.text.length > 0 ? 
            this.props.search.results : 
            this.props.categories

        const categories = data.map(cat => {
            return (
                <li key={ cat.slug }>
                    <h2>{ cat.title } ({ cat.posts.length })</h2>
                    <Posts children={ cat.posts } />
                </li>
            );
        });
        
        return (

            <ul id={ styles.collection }>
                { this.props.search.text.length >= 1 && this.props.search.results.length < 1 ? 
                    <h1>No { this.props.search.filter } found.</h1> : categories }
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Categories);