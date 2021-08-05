import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContainerOuter from './components/ContainerOuter';
import Landing from './components/Landing';

function App() {
  return (
    <ContainerOuter>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route path="/resume"></Route>
        </Switch>
      </Router>
    </ContainerOuter>
  );
}

export default App;
