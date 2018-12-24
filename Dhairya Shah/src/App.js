import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default App;
