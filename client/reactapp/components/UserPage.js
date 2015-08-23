import React from 'react';

export default class UserPage extends React.Component {

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
				<h2>User</h2>

				<p>Under construction.</p>
			</div>
		);
	}

}