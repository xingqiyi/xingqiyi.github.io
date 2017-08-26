import React from "react";

// import { View, Text } from "react-native";

import { ScrollView, View, Text } from "react-native";
import { Grid } from "antd-mobile";

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
  text: `名字${i}`
}));

export default class NewsDetailScreen extends React.Component {
  static navigationOptions = {
    title: "发现"
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView>
        <View style={[{ margin: 10 }]}>
          <Text>简单示例</Text>
          <Text>
            Chat with {params.user}
          </Text>
        </View>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} hasLine={false} />
        </View>

        <View style={[{ margin: 10 }]}>
          <Text>走马灯</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          onClick={(_el, index) => alert(index)}
        />
      </ScrollView>
    );
  }
}
