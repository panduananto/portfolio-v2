import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContainerOuter from './components/ContainerOuter';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {
  return (
    <ContainerOuter>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
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
