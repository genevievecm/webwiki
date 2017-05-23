import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flatten } from '../../../actions/FlattenArray';
import getCategoriesAndPosts from '../../../actions/GetCategoriesAndPosts';
import getFilteredPosts from '../../../actions/GetFilteredPosts';
import Posts from '../Posts/Posts';
import Loader from '../../common/Loader/Loader';
import styles from './Categories.css';

// get the state from redux store
const mapStateToProps = (state) => {
    return ({
        wp_content: state.wp_content,
        categories: state.wp_content.categories,
        posts: state.wp_content.posts,
        filteredposts: state.filteredposts,
        pending: state.pending,
        searchvalue: state.searchvalue.text,
    });
}

// execute operation to update store
const mapDispatchtoProps = {
    getCategoriesAndPosts,
    getFilteredPosts
};

const filter = (array, expression) => {
    return array.filter(post => 
        post.post_title.toLowerCase().includes(expression.toLowerCase()));
}

class Categories extends Component {

    // get categories when component is mounted in DOM
    // because we require adding new nodes to the DOM
    componentDidMount() {
    	this.props.getCategoriesAndPosts();
    }

    shouldComponentUpdate(nextProps){

        if(this.props.searchvalue !== nextProps.searchvalue){

            const filteredPosts = filter(this.props.posts, nextProps.searchvalue)
                        
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

            const filteredPosts = filter(cat.posts, this.props.searchvalue);
            
            if(filteredPosts.length >= 1){
                return (
                    <li key={ cat.slug }>
                        <h2>{ cat.title } ({ filteredPosts.length })</h2>
                        <Posts children={ filteredPosts } />
                    </li>
                );
            }
        })

        // if(this.props.filteredposts.length < 1){
        //     return <p>No search results</p>;
        // }
        
        return <ul id={ styles.collection }>{ categories }</ul>;

    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Categories);








