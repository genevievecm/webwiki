import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    componentDidMount() {
    	
    }

    render() {
        return (
        	<div>
	        	<h2>Post</h2>
        	</div>
        );
    }
}

// // get the state from redux store
// const mapStateToProps = (state) => {
// 	// debugger;
// 	return ({
// 		categories: state.categories,
// 	});
// }

// // execute operation to update store
// const mapDispatchtoProps = {
// 	getCategories,
// };

// export default connect(mapStateToProps, mapDispatchtoProps)(App);

export default Post;