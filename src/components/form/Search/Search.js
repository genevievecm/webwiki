import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.css';
import getSearchValue from '../../../actions/GetSearchValue';

// get the state from redux store
const mapStateToProps = (state) => {
    return {
    	searchvalue: state.searchvalue.value,
        categories: state.categories,
        filteredposts: state.filteredposts
  	}
}

// execute operation to update store
const mapDispatchtoProps = (dispatch) => {
    return {
    	onSearchChange: (event) => dispatch(getSearchValue(event.target.value)),
  	}
}

class Search extends Component {

    render() {
        return (
            <div id={ styles.searchbox }>
                <input type='text' onChange={ this.props.onSearchChange } placeholder='Search' />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Search);