import React from 'react';
import logo from './logo.svg';
import './App.css';
import StrategyCanvas from './pages/StrategyCanvas'
import AddMolecues from './molecues/AddMolecues'
import GroupList from './molecues/GroupList'

function App() {
  return (
    <div className="App">
      <GroupList />
      <AddMolecues label="Group Name"/>
    </div>
  );
}

export default App;
