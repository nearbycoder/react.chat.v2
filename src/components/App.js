import React from 'react';

export const App = React.createClass({
	render() {
		return (
			<div>
				<div className="side-nav">
					<div className="side-nav-title">Rooms</div>
					<div className="side-nav-search"><input type="text" placeholder="enter channel to filter by"></input></div>
					<ul className="rooms">
						<li><a href="#/home"># home</a></li>
						<li><a href="#/about"># about</a></li>
					</ul>
				</div>
				<div className="body">
					{this.props.children}
				</div>
				<div className="footer">
				</div>
			</div>
		);
	}
});
