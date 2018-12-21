import React, { Component } from 'react';
import './App.css';
import Navbar from'./Navbar';
import Header from './Header';
import Section from './Section';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
