import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCategories from '../../actions/getCategories';
import ListItem from '../../components/ListItem/ListItem';
import styles from './App.scss';

// get the state from redux store
const mapStateToProps = (state) => {
    return ({
        categories: state.categories,
    });
}

// execute operation to update store
const mapDispatchtoProps = {
    getCategories
};

class App extends Component {

    // get categories when component is mounted in DOM
    // because we require new DOM nodes
    componentDidMount() {
    	this.props.getCategories();
    }

    render() {
        // loop through the categories array and create a new component for each,
        // passing the current category (name) and its children (posts) as props
        let nodes = this.props.categories.map(cat => {
            return (
                <ListItem key={cat.title} item={cat.title} children={cat.posts} />
            );
        });

        return (
        	<div className={ styles.main }>
	        	<h2>Webwiki</h2>
                <ul>{nodes}</ul>
        	</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);