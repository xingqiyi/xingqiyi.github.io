'use strict';

{/**引入样式文件 */ }
import styles from './Login.style.js';
{/**引入图标字体 */ }
import Icon from 'react-native-vector-icons/FontAwesome';
{/**引入Homepage */ }
import Home from 'home.js';

import React, {
    Component,
    TouchableHighlight,
    Text,
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null
        }
    }

    _onLogin() {
        // 进行跳转并传递参数
        this.props.navigator.push({
            title: 'homepage',
            component: Home,
            params: {
                name: 'Tom'
            }
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.th}
                    underlayColor="rgb(210, 230, 255)"
                    onPress={this._onLogin.bind(this)}>
                    <View>
                        <Text>登录</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }