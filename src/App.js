import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing></Landing>
        </Route>
        <Route path="/resume"></Route>
      </Switch>
    </Router>
  );
}

export default App;
