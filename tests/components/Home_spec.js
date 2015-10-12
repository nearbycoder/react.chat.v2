var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
import { Home } from '../../src/components/Home';

describe('initial home rendered', function () {
	beforeEach(function() {
		this.home = TestUtils.renderIntoDocument(<Home/>);
	});

  it('renders without problems', function () {
    TestUtils.isDOMComponent(this.home);
  });

});
