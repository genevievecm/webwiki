import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Posts.css';

const Posts = (props) => {

    let posts = props.children.map(child => {
        return (
            <li key={ child.ID } className={ styles.posttitle }>
            	<Link to={`/webwiki/post/${child.ID}`}>{ child.post_title }</Link>
            </li>
        );
    })

    return <ul>{ posts }</ul>; 
}

export default Posts;