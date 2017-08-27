import React from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import DiscoverScreen from './tabPages/DiscoverScreen';
import MineScreen from './tabPages/MineScreen';

const bookIcon = require('./image/friend_sel.png');

class MsgScreen extends React.Component {
  static navigationOptions = {
    // tabBarLabel: "消息",
    // headerTitle: "消息",
    title: ' 消息',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) =>
      <Image source={bookIcon} style={[styles.icon, { tintColor }]} />
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="消息页面"
      />
    );
  }
}

class BookScreen extends React.Component {
  static navigationOptions = {
    title: '通信录',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) =>
      <Image source={bookIcon} style={[styles.icon, { tintColor }]} />
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="通讯录页面"
      />
    );
  }
}

class AdminScreen extends React.Component {
  static navigationOptions = {
    title: '管理',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) =>
      <Image source={bookIcon} style={[styles.icon, { tintColor }]} />
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="管理页面"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

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
