import React from 'react';
import styles from './RadioButton.css';

const RadioButton = (props) => {

    return (
        <div>
        	<input 
        		type="radio" 
                id={ props.filter }
                value={ props.filter }
                checked={ props.children.filter === props.filter }
                onChange={ (e) => 
                    props.onFilterChange(props.children.text, e.target.value, props.categories) } />
            <label 
                htmlFor={ props.filter } 
                className={ styles.filter }>
                { props.filter.charAt(0).toUpperCase() + props.filter.slice(1) }
            </label>
        </div>
    ); 
}

export default RadioButton;