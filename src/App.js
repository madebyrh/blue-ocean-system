import React from 'react';
import logo from './logo.svg';
import './App.css';
import StrategyCanvas from './pages/StrategyCanvas'
import AddMolecues from './molecues/AddMolecues'
import GroupList from './molecues/GroupList'
import Graph from './molecues/Graph'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndustryList from './pages/IndustryList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/industrylist' exact component={IndustryList} />
        <Route path='/industrylist/:id' component={StrategyCanvas} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
