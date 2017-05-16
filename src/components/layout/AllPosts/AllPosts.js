import React from 'react';
import { Link } from 'react-router-dom';

const AllPosts = (props) => {

    let posts = props.children.map(child => {
        return (
            <li key={ child.ID }>
            	<Link to={`/webwiki/post/${child.ID}`}>{ child.post_title }</Link>
            </li>
        );
    })

    return <ul>{ posts }</ul>; 
}

export default AllPosts;