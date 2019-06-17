import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe'
    const loading = false;
    const shwoName = true;
    
    return (
      <div className="App">
        <Navbar title = 'Github Finder'/>
      </div> 
    );
  }
}

export default App;
