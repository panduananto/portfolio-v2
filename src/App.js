import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContainerOuter from './components/ContainerOuter';
import Header from './components/Header';
import Landing from './components/Landing';
import Resume from './components/Resume';

function App() {
  return (
    <ContainerOuter>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
        </Switch>
      </Router>
    </ContainerOuter>
  );
}

export default App;
