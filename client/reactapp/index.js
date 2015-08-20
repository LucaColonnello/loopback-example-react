import React from 'react';
import Router from './router';

// init router
Router.run( function( Handler, state ) {
	React.render( (
		<Handler {...state} />
	), document.getElementById( 'app-container' ) );
} );