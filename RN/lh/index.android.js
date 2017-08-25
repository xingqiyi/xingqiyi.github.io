/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return <Text>Hello, Navigation!</Text>;
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('lh', () => SimpleApp);