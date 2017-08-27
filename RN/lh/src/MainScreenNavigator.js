// import React from 'react';
// import { Button, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';


import MsgScreen from './tabPages/MsgScreen';
import BookScreen from './tabPages/BookScreen';
import AdminScreen from './tabPages/AdminScreen';
import DiscoverScreen from './tabPages/DiscoverScreen';
import MineScreen from './tabPages/MineScreen';


const MainScreenNavigator = TabNavigator(
  {
    Msg: { screen: MsgScreen },
    Book: { screen: BookScreen },
    Admin: { screen: AdminScreen },
    Discover: { screen: DiscoverScreen },
    Mine: { screen: MineScreen }
  },
  {
    tabBarOptions: {
      activeTintColor: '#f8a'
    }
  }
);

export default MainScreenNavigator;
