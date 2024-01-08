import React, {forwardRef, memo} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeTopTabStackParamList} from './types';
import {ROUTER_HOME_TAB} from './routes';
import TopTabBar from './components/TopTabBar';
import SuggestScreen from '@src/screens/home/screen/suggest';
import FilmScreen from '@src/screens/home/screen/film';
import SeriesTV from '@src/screens/home/screen/seriesTv';
import HoatHinhScreen from '@src/screens/home/screen/hoathinh';
import TVShowScreen from '@src/screens/home/screen/tvshow';
import {defaultColor} from '@src/utils/theme';
const Tab = createMaterialTopTabNavigator<HomeTopTabStackParamList>();
export type IHomeTopTabStack = {};
export type OHomeTopTabStack = {};
const HomeTopTabStack = forwardRef<OHomeTopTabStack, IHomeTopTabStack>(
  (_props, _ref) => {
    return (
      <Tab.Navigator
        initialRouteName={ROUTER_HOME_TAB.SUGGEST_SCREEN}
        sceneContainerStyle={{
          backgroundColor: defaultColor.bg_primary,
        }}
        screenOptions={{
          swipeEnabled: false,
          lazy: true,
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={props => <TopTabBar {...props} />}>
        <Tab.Screen
          name={ROUTER_HOME_TAB.SUGGEST_SCREEN}
          component={SuggestScreen}
        />
        <Tab.Screen name={ROUTER_HOME_TAB.PHIM_LE} component={FilmScreen} />
        <Tab.Screen name={ROUTER_HOME_TAB.PHIM_BO} component={SeriesTV} />
        <Tab.Screen
          name={ROUTER_HOME_TAB.HOAT_HINH}
          component={HoatHinhScreen}
        />
        <Tab.Screen name={ROUTER_HOME_TAB.TV_SHOW} component={TVShowScreen} />
      </Tab.Navigator>
    );
  },
);

export default memo(HomeTopTabStack);
