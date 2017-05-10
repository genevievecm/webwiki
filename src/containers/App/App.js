import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCategories from '../../actions/getCategories';
import List from '../../components/List/List';

// get the state from redux store
const mapStateToProps = (state) => {
    return ({
        categories: state.categories,
    });
}

// execute operation to update store
const mapDispatchtoProps = (dispatch) => {
    return {
        
    }
};

class App extends Component {

    componentDidMount() {
    	this.props.getCategories();
    }

    render() {
        return (
        	<div>
	        	<h2>Webwiki</h2>
	        	{this.props.categories ? <List categories={this.props.categories} /> : ''}
        	</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);