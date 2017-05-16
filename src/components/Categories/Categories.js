import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCategories from '../../actions/GetCategories';
import AllPosts from '../AllPosts/AllPosts';
import styles from './Categories.css';

// get the state from redux store
const mapStateToProps = (state) => {
    console.log(state);
    return ({
        categories: state.categories,
        pending: state.pending,
    });
}

// execute operation to update store
const mapDispatchtoProps = {
    getCategories
};

class Categories extends Component {

    // get categories when component is mounted in DOM
    // because we require adding new nodes to the DOM
    componentDidMount() {
    	this.props.getCategories();
    }

    render() {

        if(this.props.pending){ 
            return <p>LOADING...</p>
        }

        // loop through and output name of each category,
        // pass any children (posts) as props
        let categories = this.props.categories.map(cat => {
            return (
                <li key={ cat.slug }>
                    <h2>{ cat.title }</h2>
                    <AllPosts children={ cat.posts } />
                </li>
            );
        })
        
        return <ul id={ styles.collection }>{ categories }</ul>;

    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Categories);