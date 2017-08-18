import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


import { TabBar, Icon } from 'antd-mobile';
import { AppRegistry } from 'react-native';


export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }

    renderContent(pageText) {
        let content;
        if (pageText == '生活') {
            content =
                <View style={{ backgroundColor: '#58a', flex: 1 }}>
                    <Text style={{ color: 'red', backgroundColor: 'green', flex: 1 }}>
                        你已点击“{pageText}”
                 </Text>

                    <Text style={{ color: 'blue', backgroundColor: 'gray', flex: 1 }}>
                        你已点击“{pageText}”
                 </Text>
                </View>
        }

        else if (pageText == '口碑') {
            content =
                <View style={{ backgroundColor: '#58a', flex: 1 }}>
                    <Text style={{ color: 'red', backgroundColor: '#eee', flex: 1 }}>
                        你已点击“{pageText}”
             </Text>

                    <Text style={{ color: 'blue', backgroundColor: 'gray', flex: 1 }}>
                        你已点击“{pageText}”
             </Text>
                </View>

        } else if (pageText == '朋友') {
            content =
                <View style={{ backgroundColor: '#58a', flex: 1 }}>
                    <Text style={{ color: 'red', backgroundColor: '#58a', flex: 1 }}>
                        你已点击“{pageText}”
             </Text>

                    <Text style={{ color: 'blue', backgroundColor: 'gray', flex: 1 }}>
                        你已点击“{pageText}”
             </Text>
                </View>

        } else if (pageText == '我的') {
            content =
                <View style={{ backgroundColor: '#58a', flex: 1 }}>
                    <Text style={{ color: 'red', backgroundColor: 'blue', flex: 1 }}>
                        你已点击“{pageText}”
             </Text>

                    <Text style={{ color: 'blue', backgroundColor: 'gray', flex: 1 }}>
                        你已点击“{pageText}”
             </Text>
                </View>

        }


        return (
            content
        );


    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="生活"
                    key="生活"
                    icon={
                        <Image
                            style={styles.logo}
                            source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }}
                        />
                    }

                    selectedIcon={
                        <Image
                            style={styles.logo}
                            source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }}
                        />
                    }


                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}
                    data-seed="logId"
                >
                    {this.renderContent('生活')}
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type="koubei-o" size="md" />}
                    selectedIcon={<Icon type="koubei" size="md" />}
                    title="口碑"
                    key="口碑"
                    badge={'new'}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}
                    data-seed="logId1"
                >
                    {this.renderContent('口碑')}
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat'
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat'
                        }}
                        />
                    }
                    title="朋友"
                    key="朋友"
                    dot
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                    }}
                >
                    {this.renderContent('朋友')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="我的"
                    key="我的"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                    }}
                >
                    {this.renderContent('我的')}
                </TabBar.Item>
            </TabBar >
        );
    }
}


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },

    logo: {
        borderWidth: 2,
    }
});






