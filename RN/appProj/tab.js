import React from 'react';
import {
    Text,
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default React.createClass({
    render() {
        return <ScrollableTabView
            style={{ marginTop: 20, }}
            renderTabBar={() => <DefaultTabBar />}
        >

            <Text tabLabel='Tab 1'>My</Text>
            <Text tabLabel='Tab 2'>favorite</Text>
            <Text tabLabel='Tab 3'>project</Text>
            <Text tabLabel='Tab 4'>xx</Text>

        </ScrollableTabView>;
    },
});



var App = React.createClass({
    render() {
        return <ScrollableTabView
            renderTabBar={() => <DefaultTabBar />}
            ref={(tabView) => { this.tabView = tabView; }}
        >
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
            <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
                <Text>Lets go back!</Text>
            </TouchableOpacity>
        </ScrollableTabView>;
    },
});