import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class DiscoverScreen extends React.Component {
  // static navigationOptions = {
  //   title: "发现"
  // };

  static navigationOptions = {
    title: '发现',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) =>
      (<Image
        source={require('../image/friend_sel.png')}
        style={[styles.icon, { tintColor }]}
      />)
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hello, my first Chat App!</Text>

        <Button
          onPress={() => navigate('NewsDetail', { user: 'jim' })}
          title="新闻详情"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});
