import React from 'react';

export default class TodosPage extends React.Component {

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
				<section id="todoapp">

					{/* ToDoAdd */}

					{/* ToDoList */}

					{/* ToDoFilters */}

				</section>

				<footer id="info">
					<p>Double-click to edit a todo</p>
				</footer>
			</div>
		);
	}

}