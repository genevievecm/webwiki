import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Search.css';
import getSearchValue from '../../../actions/GetSearchValue';
import RadioButton from '../RadioButton/RadioButton';

// get the state from redux store
const mapStateToProps = (state) => {

    return {
    	search: state.searchvalue, // text, filter, results
        categories: state.categories,
  	}
}

// execute operation to update store
const mapDispatchtoProps = {
    getSearchValue,
}

class Search extends Component {

    render() {

        const { getSearchValue } = this.props;
        
        return (
            <div id={ styles.searchcontainer }>
                <div id={ styles.searchbox }>

                    <div className={ styles.searchinput }>
                        <input className={ styles.input }
                            type='text' 
                            placeholder='Enter a search term.'
                            value={ this.props.search.text }
                            onChange={ (e) => 
                                getSearchValue(e.target.value, this.props.search.filter, this.props.categories) } />
                        <button 
                            className={ styles.clear } 
                            onClick={ (e) => getSearchValue('', 'posts', this.props.categories) }>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <ul className={ styles.tabs }>
                        <li><RadioButton
                            filter='posts'
                            children={ this.props.search } 
                            categories={ this.props.categories } 
                            onFilterChange={ getSearchValue } /></li>

                        <li><RadioButton 
                            filter='categories'
                            children={ this.props.search } 
                            categories={ this.props.categories}
                            onFilterChange={ getSearchValue } /></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Search);