import React, {forwardRef} from 'react';
import {HomeStackParamList, MainStackScreenProps} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTER_HOME} from './routes';
import HomeScreen from '@src/screens/home';
import BottomTabBar from './components/BottomTabBar';
const Stack = createBottomTabNavigator<HomeStackParamList>();

export interface IHomeStack extends MainStackScreenProps<'HOME_STACK'> {}
export type OHomeStack = {};
const HomeStack = forwardRef<OHomeStack, IHomeStack>((props, _ref) => {
  const {} = props;
  return (
    <Stack.Navigator
      initialRouteName={ROUTER_HOME.HOME_SCREEN}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={p => <BottomTabBar {...p} />}
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}>
      <Stack.Screen name={ROUTER_HOME.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={ROUTER_HOME.SHORT_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={ROUTER_HOME.LIVE_STREAM_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen name={ROUTER_HOME.FAVORITE_SCREEN} component={HomeScreen} />
      <Stack.Screen name={ROUTER_HOME.PROFILE_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
});

export default HomeStack;
