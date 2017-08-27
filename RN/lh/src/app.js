import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";

import MainScreenNavigator from "./MainScreenNavigator";

import NewsDetailScreen from "./discoverPages/NewsDetailScreen";

// MainScreenNavigator.navigationOptions = {
//   title: "My NewsDetails"
// };

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  NewsDetail: { screen: NewsDetailScreen }
});

export default SimpleApp;

