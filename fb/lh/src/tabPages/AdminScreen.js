/*
 * @Author: shuaixc 
 * @Date: 2017-09-12 02:20:10 
 * @Last Modified by:   shuaixc 
 * @Last Modified time: 2017-09-12 02:20:10 
 */

import React from 'react';
import { Button } from 'react-native';


export default class AdminScreen extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="管理页面"
      />
    );
  }
}
