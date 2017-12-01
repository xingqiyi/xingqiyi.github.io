import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Slide from "./Slide";

import Calculator from './LiftingState/LiftingState';
import Composition from './Composition/Composition';


const globalVar = window.globalVarTest;
console.log(globalVar);

// 组件
var HelloMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Hello {this.props.name}
        </h1>
        <h2>worlddddddkkk.</h2>
      </div>
    );
  }
});

var arr = [<h1 key="1">Hello world!</h1>, <h2 key="2">React is awesome</h2>];
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
    <div>
      {arr}
    </div>

    <HelloMessage name="John" />

    <Calculator></Calculator>

    <Composition></Composition>

    <div className="App-slide">
      <Slide />
    </div>
  </div>
);

class App extends Component {
  render() {
    return element;
  }
}

export default App;
