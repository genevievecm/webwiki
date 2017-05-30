import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flatten } from '../../../utils/_flatten-array';
import getCategoriesAndPosts from '../../../actions/GetCategoriesAndPosts';
import Posts from '../Posts/Posts';
import Loader from '../../common/Loader/Loader';
import styles from './Categories.css';

// get the state from redux store
const mapStateToProps = (state) => {
    return ({
        categories: state.wp_content.categories,
        pending: state.pending,
        searchvalue: state.searchvalue.text,
        filteredposts: state.searchvalue.posts,
        in_use: state.searchvalue.in_use

    });
}

// execute operation to update store
const mapDispatchtoProps = {
    getCategoriesAndPosts,
};

class Categories extends Component {

    // get categories when component is mounted in DOM
    // because we require adding new nodes to the DOM
    componentWillMount() {
    	this.props.getCategoriesAndPosts();
    }

    render() {

        if(this.props.pending){ 
            return <Loader />;
        }

        // loop through and output name of each category,
        // pass children (posts) as props
        const categories = this.props.categories.map(cat => {

            const filteredPosts = cat.posts.filter(post => 
                post.post_title.toLowerCase().includes(this.props.searchvalue.toLowerCase()));
            
            if(filteredPosts.length >= 1){
                return (
                    <li key={ cat.slug }>
                        <h2>{ cat.title } ({ filteredPosts.length })</h2>
                        <Posts children={ filteredPosts } />
                    </li>
                );
            }
        });

        if(this.props.filteredposts.length < 1 && this.props.searchvalue.length >= 1){
            return <h1>No search results</h1>
        }
        
        return <ul id={ styles.collection }>{ categories }</ul>;

    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Categories);








