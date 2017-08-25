
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import HomePage from './src/Root';

class lh extends Component {
    render() {
        return (
            <HomePage></HomePage>
        );
    }
}



AppRegistry.registerComponent('lh', () => lh);
