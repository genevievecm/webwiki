import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCategories from '../../../actions/GetCategories';
import getFilteredPosts from '../../../actions/GetFilteredPosts';
import Posts from '../Posts/Posts';
import Loader from '../../common/Loader/Loader';
import styles from './Categories.css';

// get the state from redux store
const mapStateToProps = (state) => {
    return ({
        categories: state.categories,
        filteredposts: state.filteredposts,
        pending: state.pending,
        searchvalue: state.searchvalue.value,
    });
}

// execute operation to update store
const mapDispatchtoProps = {
    getCategories,
    getFilteredPosts
};

// flatten array with recursion
const flatten = (array) => {
    return array.reduce( (a,b) => a.concat(Array.isArray(b) ? flatten(b) : b), [] )
};

class Categories extends Component {

    // get categories when component is mounted in DOM
    // because we require adding new nodes to the DOM
    componentDidMount() {
    	this.props.getCategories();
    }

    shouldComponentUpdate(nextProps){

        if(this.props.searchvalue !== nextProps.searchvalue){

            const posts = flatten(this.props.categories.map(cat => cat.posts));
            let filteredPosts = posts.filter(post =>
               post.post_title.toLowerCase().includes(nextProps.searchvalue.toLowerCase()));
            
            nextProps.searchvalue ? filteredPosts : filteredPosts = ['no results'];
            
            this.props.getFilteredPosts(filteredPosts);

        }

        return true;
    }

    render() {

        if(this.props.pending){ 
            return <Loader />;
        }

        // loop through and output name of each category,
        // pass children (posts) as props
        const categories = this.props.categories.map(cat => {

            // check if any post titles match search input
            const filteredPosts = cat.posts.filter(post =>
               post.post_title.toLowerCase().includes(this.props.searchvalue.toLowerCase())
            );

            // if post title matches search input
            if(filteredPosts.length >= 1){
                return (
                    <li key={ cat.slug }>
                        <h2>{ cat.title } ({ filteredPosts.length })</h2>
                        <Posts children={ filteredPosts } />
                    </li>
                );
            }
        })

        if(this.props.filteredposts.length < 1){
            return <p>No search results</p>;
        }
        
        return <ul id={ styles.collection }>{ categories }</ul>;

    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Categories);








