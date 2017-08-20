'use strict'

import React, {
    Component,
    TouchableOpacity,
    View,
    Text
} from 'react-native'

import styles from './Home.style.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Frank'
        };
    }
    /**接收传递过来的参数 */
    componentDidMount() {
        this.setState({
            name: this.props.name
        })
    }
    /**返回事件 */
    _onBack() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello.{this.state.name}</Text>
                <TouchableOpacity style={styles.th} onPress={this._onBack.bind(this)}>
                    <Text>点我返回</Text>
                </TouchableOpacity>
            </View>
        )
    }
}