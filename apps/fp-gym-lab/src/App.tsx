import React from 'react';

import logo from './logo.svg';

import './App.css';

import { Button } from './App.styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FP Gym Lab ready to GO!</p>
        <Button>Touch me for some magic 😘</Button>
      </header>
    </div>
  );
}

export default App;
