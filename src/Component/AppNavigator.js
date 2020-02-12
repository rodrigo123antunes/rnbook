'use strict';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Search, Results, Detail, Favorite} from '../View/Page';

const AppNavigator = createStackNavigator(
  {
    Search: {screen: Search},
    Results: {screen: Results},
    Detail: {screen: Detail},
    Favorite: {screen: Favorite},
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
