/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import Navigation from "./src/root";

export default class LinghangClient extends Component {
  render() {
    return <Navigation />;
  }
}

AppRegistry.registerComponent("xxxxx", () => LinghangClient);
