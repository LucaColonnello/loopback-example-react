import React from 'react';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {

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
				<RouteHandler {...this.props} />
			</div>
		);
	}

}