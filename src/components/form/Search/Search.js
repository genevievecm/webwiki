import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Search.css';
import getSearchValue from '../../../actions/GetSearchValue';

// get the state from redux store
const mapStateToProps = (state) => {

    return {
    	searchvalue: state.searchvalue.text,
        searchfilter: state.searchvalue.filter,
        categories: state.categories,
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
                <label>
                posts
                <input 
                    type="radio" 
                    value="posts" 
                    checked={ this.props.searchfilter === 'posts' } 
                    onChange={ (e) => getSearchValue(this.props.searchvalue, e.target.value, this.props.categories) } />
                </label>

                <label>
                categories
                <input 
                    type="radio" 
                    value="categories"
                    checked={ this.props.searchfilter === 'categories' } 
                    onChange={ (e) => getSearchValue(this.props.searchvalue, e.target.value, this.props.categories) } />
                </label>

                <input 
                    type='text' 
                    onChange={ (e) => 
                        getSearchValue(e.target.value, this.props.searchfilter, this.props.categories) } 
                    placeholder='Search' />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Search);