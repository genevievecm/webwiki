import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flatten } from '../../../utils/_flattenArray';
import { filter } from '../../../utils/_filterArray';
import getCategories from '../../../actions/GetCategories';
import Posts from '../Posts/Posts';
import Loader from '../../common/Loader/Loader';
import styles from './Categories.css';

// get state from redux store
const mapStateToProps = (state) => {
    return ({
        pending: state.pending,
        categories: state.categories,
        searchvalue: state.searchvalue.text,
        searchfilter: state.searchvalue.filter,
        searchresults: state.searchvalue.results,
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

        const data = this.props.searchvalue.length > 0 ? 
            this.props.searchresults : 
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
                { this.props.searchvalue.length >= 1 && this.props.searchresults.length < 1 ? 
                    <h1>No { this.props.searchfilter } found.</h1> : categories }
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Categories);