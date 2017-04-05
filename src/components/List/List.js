import React from 'react';
import { Link } from 'react-router';

const List = (props) => {
	// console.log(props.categories);
	return (
		<div>
			{props.categories.map((cat, index) => {
				return (
					<li key={index}>{cat.title}
						<ul>
							{cat.posts.map((p, i) => {
								return (
									<li key={i}>
										<Link to={'/webwiki/post/' + p.ID}>{p.post_title}</Link>
									</li>
								);
							})}
						</ul>
					</li>
				)
			})}
		</div>
	)
}

export default List;