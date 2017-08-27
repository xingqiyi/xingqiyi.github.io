
import React from 'react';
import { Button, Image, StyleSheet } from 'react-native';


const bookIcon = require('../image/logo.png');


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

export default class AdminScreen extends React.Component {
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
