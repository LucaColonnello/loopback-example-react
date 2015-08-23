import React from 'react';

export default class IndexPage extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func
	}

	constructor ( props, context ) {
		super( props, context );

		this.props = props;
		this.state = { };
		this.context = context;
	}
	
	componentWillReceiveProps ( nextProps ) { }
	componentReceiveProps ( ) { }

	render ( ) {
		return (
			<div>
				<h2>Welcome</h2>

				This is the welcome view.

				<a href="/my/todos">View your todo list.</a>
			</div>
		);
	}

}