import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

var element = (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React ooooooo</h2>
    </div>
    <p className="App-intro">
      To get started, edit
      <code>src/App.js</code>
      and save to reload.
    </p>
  </div>
);

class App extends Component {
  render() {
    return element;
  }
}

export default App;
