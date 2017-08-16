import React, { Component } from "react";
import { DatePicker, List } from "antd-mobile";
import { AppRegistry, View, Text } from "react-native";

export default class AntdMobieDemo extends Component {
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <List>
          <DatePicker mode="datetime">
            <List.Item arrow="horizontal">选择时间</List.Item>
          </DatePicker>
        </List>

        <Text>asdf</Text>
      </View>
    );
  }
}

// change xxxxx to your project name
AppRegistry.registerComponent("xxxxx", () => AntdMobieDemo);
