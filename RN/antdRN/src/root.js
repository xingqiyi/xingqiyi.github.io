import React from "react";
import { View, Text } from "react-native";
import { TabBar, SearchBar } from "antd-mobile";

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst
} from "react-native-router-flux";

import Home from "./Home";

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  };
};

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab"
    };
  }

  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <SearchBar placeholder="搜索" showCancelButton />
        <Text style={{ margin: 50 }}>
          {pageText}
        </Text>

        <Router createReducer={reducerCreate}>
          <Scene key="lightbox" lightbox>
            <Scene key="modal" modal hideNavBar>
              <Scene
                key="home"
                component={Home}
                title="Replace"
                type="replace"
              />
            </Scene>
          </Scene>
        </Router>
      </View>
    );
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        <TabBar.Item
          title="生活"
          icon={require("./image/alipay.png")}
          selectedIcon={require("./image/alipay_sel.png")}
          selected={this.state.selectedTab === "blueTab"}
          onPress={() => this.onChangeTab("blueTab")}
        >
          {this.renderContent("生活 Tab1")}
        </TabBar.Item>
        <TabBar.Item
          icon={require("./image/koubei.png")}
          selectedIcon={require("./image/koubei_sel.png")}
          title="口碑"
          badge={2}
          selected={this.state.selectedTab === "redTab"}
          onPress={() => this.onChangeTab("redTab")}
        >
          {this.renderContent("口碑 Tab2")}
        </TabBar.Item>
        <TabBar.Item
          icon={require("./image/friend.png")}
          selectedIcon={require("./image/friend_sel.png")}
          title="朋友"
          selected={this.state.selectedTab === "greenTab"}
          onPress={() => this.onChangeTab("greenTab")}
        >
          {this.renderContent("朋友 Tab3")}
        </TabBar.Item>
        <TabBar.Item
          icon={require("./image/busi.png")}
          selectedIcon={require("./image/busi_sel.png")}
          title="我的"
          selected={this.state.selectedTab === "yellowTab"}
          onPress={() => this.onChangeTab("yellowTab")}
        >
          {this.renderContent("我的 Tab4")}
        </TabBar.Item>
      </TabBar>
    );
  }
}
