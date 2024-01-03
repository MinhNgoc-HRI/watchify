import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from '@src/navigation/types';
import {ROUTER_MAIN} from '@src/navigation/routes';
import OnBroadScreen from '@src/screens/onbroad';
import LoginScreen from '@src/screens/login';
import HomeStack from '@src/navigation/HomeStack';
const Stack = createStackNavigator<MainStackParamList>();
const MainStack: React.FC<any> = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTER_MAIN.HOME_STACK}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          shadowColor: 'transparent',
        },
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={ROUTER_MAIN.ON_BROAD_SCREEN}
        component={OnBroadScreen}
      />
      <Stack.Screen name={ROUTER_MAIN.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={ROUTER_MAIN.HOME_STACK} component={HomeStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
