import React from 'react';

export default function List(props){
	return (
		<ul>
			{ 
				props.categories.map((cat, index) => {
					return <li key={index}>{cat.name}</li>
				})
			}
		</ul>
	)
}