import { StackNavigator } from 'react-navigation';

import MainScreenNavigator from './MainScreenNavigator';
import NewsDetailScreen from './discoverPages/NewsDetailScreen';

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  NewsDetail: { screen: NewsDetailScreen }
});

export default SimpleApp;
