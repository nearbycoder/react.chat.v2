import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';
import { App } from './components/App';
import { Home } from './components/Home';
import { About } from './components/About';
require("./styles/main.scss");


React.render((
  <Router>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.body);
