import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllPosts extends Component {

    render() {

        let posts = this.props.children.map(child => {
            return (
                <li key={ child.ID }>
                	<Link to={`/webwiki/post/${child.ID}`}>{ child.post_title }</Link>
                </li>
            );
        })

        return <ul>{ posts }</ul>;
    }
}

export default AllPosts;