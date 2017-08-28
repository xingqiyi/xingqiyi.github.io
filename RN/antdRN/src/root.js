import React from 'react';
import { View, Text } from 'react-native';
import {
	TabBar,
	SearchBar,
	Tabs,
	Popup,
	WhiteSpace,
	Button,
	List
} from 'antd-mobile';

import BasicListExample from './BasicListExample';
import PopupExample from './PopupExample';
// import RefreshControlExample from "./RefreshControlExample";
import BasicModalExample from './BasicModalExample';

import BasicGridExample from './BasicGridExample';
import ImagePickerExample from './ImagePickerExample';

const reducerCreate = params => {
	const defaultReducer = new Reducer(params);
	return (state, action) => {
		console.log('ACTION:', action);
		return defaultReducer(state, action);
	};
};

/**************** tab1 ***********************************************************************/
const TabPane = Tabs.TabPane;
function onChange(key) {
	console.log('onChange', key);
}
function onTabClick(key) {
	console.log('onTabClick', key);
}
var tabContent1 = (
	<View style={{ flex: 1, paddingTop: 20 }}>
		<Tabs defaultActiveKey="1" onChange={onChange} onTabClick={onTabClick}>
			<TabPane tab="选项卡一" key="1">
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						// flex: 1

						height: 600
					}}
				>
					<BasicGridExample />
				</View>
			</TabPane>
			<TabPane tab="选项卡二" key="2">
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: 100
					}}
				>
					<ImagePickerExample />
				</View>
			</TabPane>
			<TabPane tab="选项卡三" key="3">
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: 100
					}}
				>
					<Text>选项卡三内容</Text>
				</View>
			</TabPane>
		</Tabs>
	</View>
);

/**************** tab2 ***********************************************************************/
var tabContent2 = <BasicListExample />;

/**************** tab3 ***********************************************************************/
var tabContent3 = <PopupExample />;

/**************** tab4 ***********************************************************************/
var tabContent4 = <BasicModalExample />;


export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'redTab'
		};
	}

	renderContent(pageText) {
		var tabContent;
		if (pageText === 'tab1') {
			tabContent = tabContent1;
		} else if (pageText === 'tab2') {
			tabContent = tabContent2;
		} else if (pageText === 'tab3') {
			tabContent = tabContent3;
		} else if (pageText === 'tab4') {
			tabContent = tabContent4;
		}

		return tabContent;
	}

	onChangeTab(tabName) {
		this.setState({
			selectedTab: tabName
		});
	}

	render() {
		return (
			<TabBar
				unselectedTintColor="#949494"
				tintColor="#33A3F4"
				barTintColor="#ccc"
			>
				<TabBar.Item
					title="生活"
					icon={require('./image/alipay.png')}
					selectedIcon={require('./image/alipay_sel.png')}
					selected={this.state.selectedTab === 'blueTab'}
					onPress={() => this.onChangeTab('blueTab')}
				>
					{this.renderContent('tab1')}

					{/* {tabContent1} */}

				</TabBar.Item>
				<TabBar.Item
					icon={require('./image/koubei.png')}
					selectedIcon={require('./image/koubei_sel.png')}
					title="口碑"
					badge={2}
					selected={this.state.selectedTab === 'redTab'}
					onPress={() => this.onChangeTab('redTab')}
				>
					{this.renderContent('tab2')}

					{/* <BasicListExample /> */}
				</TabBar.Item>
				<TabBar.Item
					icon={require('./image/friend.png')}
					selectedIcon={require('./image/friend_sel.png')}
					title="朋友"
					selected={this.state.selectedTab === 'greenTab'}
					onPress={() => this.onChangeTab('greenTab')}
				>
					{this.renderContent('tab3')}
					{/* <PopupExample />; */}
				</TabBar.Item>
				<TabBar.Item
					icon={require('./image/busi.png')}
					selectedIcon={require('./image/busi_sel.png')}
					title="我的"
					selected={this.state.selectedTab === 'yellowTab'}
					onPress={() => this.onChangeTab('yellowTab')}
				>
					{this.renderContent('tab4')}
					{/* <BasicModalExample /> */}

				</TabBar.Item>
			</TabBar>
		);
	}
}
