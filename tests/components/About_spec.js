var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
import { About } from '../../src/components/About';

describe('initial about rendered', function () {
	beforeEach(function() {
		this.about = TestUtils.renderIntoDocument(<About/>);
	});

  it('renders without problems', function () {
    TestUtils.isDOMComponent(this.about);
  });

});
