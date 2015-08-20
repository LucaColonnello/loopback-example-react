// test utils made in order to provide
// utility functions to the test suite
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;


export default function createComponent( Component, props, ...children ) {
	// create the shallow renderer
	const shallowRenderer = TestUtils.createRenderer( );

	// render the component and get the output
	shallowRenderer.render( React.createElement( Component, props, children.length > 1 ? children : children[0] ) );
	return shallowRenderer.getRenderOutput( );
};