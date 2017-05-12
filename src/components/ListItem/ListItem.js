import React, { Component } from 'react';
import { Link } from 'react-router';

class ListItem extends Component {

	render(){

		let childnodes = null;

		// the ListIem component calls itself if there are children (posts),
		// passing post title as props
		if(this.props.children){
			childnodes = this.props.children.map(childnode => {
				return (
					<ListItem key={childnode.ID} item={childnode.post_title} />
				);
			});
		}

		// return list element
		// display children if there are any
		return (
			<li key={this.props.item}>
				{this.props.item}
				{ childnodes ? <ul>{childnodes}</ul> : null }
			</li>
		)
	}
}

export default ListItem;