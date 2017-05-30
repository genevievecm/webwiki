import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Search.css';
import getSearchValue from '../../../actions/GetSearchValue';

// get the state from redux store
const mapStateToProps = (state) => {

    return {
    	searchvalue: state.searchvalue.text,
        posts: state.wp_content.posts,
  	}
}

// execute operation to update store
const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ getSearchValue }, dispatch);
}

class Search extends Component {

    render() {

        const { getSearchValue } = this.props;
        
        return (
            <div id={ styles.searchbox }>
                <input 
                    type='text' 
                    onChange={ (e) => getSearchValue(e.target.value, this.props.posts) } 
                    placeholder='Search' />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Search);