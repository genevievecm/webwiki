import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Posts extends Component {

    render() {

        let posts = this.props.children.map(child => {
            return (
                <li key={ child.ID }>{ child.post_title }</li>
            );
        })

        return <ul>{ posts }</ul>;
    }
}

export default Posts;