import React, {forwardRef, memo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeTopTabStackParamList} from './types';
import {ROUTER_HOME_TAB} from './routes';
import SuggestScreen from '@src/screens/home/screen/suggest';
import FilmScreen from '@src/screens/home/screen/film';
import TopTabBar from './components/TopTabBar';
const Tab = createMaterialTopTabNavigator<HomeTopTabStackParamList>();
export type IHomeTopTabStack = {};
export type OHomeTopTabStack = {};
const HomeTopTabStack = forwardRef<OHomeTopTabStack, IHomeTopTabStack>(
  (_props, _ref) => {
    return (
      <Tab.Navigator
        initialRouteName={ROUTER_HOME_TAB.SUGGEST_SCREEN}
        screenOptions={{
          swipeEnabled: false,
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={props => <TopTabBar {...props} />}>
        <Tab.Screen
          name={ROUTER_HOME_TAB.SUGGEST_SCREEN}
          component={SuggestScreen}
        />
        <Tab.Screen name={ROUTER_HOME_TAB.FILM_SCEEN} component={FilmScreen} />
      </Tab.Navigator>
    );
  },
);

export default memo(HomeTopTabStack);
