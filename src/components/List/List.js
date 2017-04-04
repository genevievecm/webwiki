import React from 'react';

const List = (props) => {
	console.log(props.categories);
	return (
		<div>
			{props.categories.map((cat, index) => {
				return (
					<li key={index}>{cat.title}
						<ul>
							{cat.posts.map((p, i) => {
								return <li key={i}>{p.post_title}</li>
							})}
						</ul>
					</li>
				)
			})}
		</div>
	)
}

export default List;