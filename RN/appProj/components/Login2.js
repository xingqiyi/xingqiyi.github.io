import React, { Component } from 'react';


import { View, Text, StyleSheet, Image } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});

export default class extends React.Component {





    render() {
        const title = this.props.title || 'No Title';
        const data = this.props.data || 'No Data';

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <View style={[styles.container, this.props.style]}>
                <Text>登录页 </Text>

                <Image source={pic} style={{ width: 193, height: 110 }} />



                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />



                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />


                <Text>Title: {title}</Text>
                <Text>Data: {data}</Text>

                {/* <Button onPress={() => Actions.loginModal2({ data: "Custom data2", title: "Custom title2" })}>Login 2</Button> */}

                {/* <Button onPress={() => Actions.refresh({ title: "Changed title" })}>Change title</Button> */}






                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}



// prop:
class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}



// state :
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}



