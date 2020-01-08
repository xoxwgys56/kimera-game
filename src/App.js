import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
  return (
    <div className="App">
      kimera game
      <Router>
      <Switch>
        <Route exact path='/' components={Home} />
        <Route components={NotFound} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
