import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { pending } from '../../actions/PendingRequest';
import getSinglePost from '../../actions/GetSinglePost';

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

class SinglePost extends Component {

    componentDidMount() {
        this.props.getSinglePost(this.props.match.params.id);
    }

    render() {

        if(this.props.pending){ 
            return <p>LOADING...</p>
        }

        return (
            <div>
                <h1>{ this.props.singlepost.title ? this.props.singlepost.title.rendered : null }</h1>
                <Link to='/webwiki'>Back</Link>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(SinglePost);