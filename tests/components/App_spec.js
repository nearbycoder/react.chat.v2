var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
import { App } from '../../src/components/App';

describe('initial app rendered', function () {
	beforeEach(function() {
		this.app = TestUtils.renderIntoDocument(<App/>);
	});

  it('renders without problems', function () {
    TestUtils.isDOMComponent(this.app);
  });

	it('renders header', function () {
		expect(React.findDOMNode(this.app).innerHTML).toContain('class="header"')
	});

	it('renders body', function () {
		expect(React.findDOMNode(this.app).innerHTML).toContain('class="body"')
	});

	it('renders footer', function () {
		expect(React.findDOMNode(this.app).innerHTML).toContain('class="footer"')
	});


});
