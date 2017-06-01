import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { pending } from '../../../actions/PendingRequest';
import getSinglePost from '../../../actions/GetSinglePost';
import Loader from '../../common/Loader/Loader';
import styles from './SinglePost.css';

// get the state from redux store
const mapStateToProps = (state) => {
    return ({
        singlepost: state.singlepost,
        pending: state.pending,
    });
}

// execute operation to update store
const mapDispatchtoProps = {
    getSinglePost
};

// set post content innerHTML in DOM
const createMarkup = (content) => {
  return {__html: content};
}

class SinglePost extends Component {

    // get Single Post by post ID
    componentWillMount() {
        this.props.getSinglePost(this.props.match.params.id);
    }

    render() {
        
        let post = this.props.singlepost;

        if(this.props.pending) return <Loader />;

        return (
            <div className={ styles.post }>
                <Link to='/webwiki'>Go Back</Link>
                <h1>{ post.title ? post.title.rendered : null }</h1>
                <div dangerouslySetInnerHTML={ createMarkup(post.content ? post.content.rendered : null) } />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(SinglePost);