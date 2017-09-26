import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ControlPanel from './components/ControlPanel';
import GridDisplay from './components/GridDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <h2> Can you make it through the grid without running out of gas?</h2>
        <h4> It costs 1 Gas point to move through a space, and 2 Gas points to move through a space you have previously visited.</h4>
        </header>
        <GridDisplay />
        <ControlPanel />
      </div>
    );
  }
}

export default App;