import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, Text, View, Button } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);

    this.username = { text: '请输入用户名' };
    this.psw = { text: '请输入密码' };

  }


  render() {
    return (


      <View style={styles.container}>


        <Text>领航管家</Text>

        <TextInput
          style={{ width: 200, height: 40, marginTop: 10, marginLeft: 0, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.username.text}
        />

        <TextInput
          style={{ width: 200, height: 40, marginTop: 10, marginLeft: 0, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.psw.text}
        />


        <Button
          style={{ marginTop: 150 }}
          // onPress={onPressLearnMore}
          title="登录"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>

    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput); AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);