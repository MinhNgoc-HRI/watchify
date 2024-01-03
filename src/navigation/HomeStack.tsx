import React, {forwardRef, useEffect} from 'react';
import {HomeStackParamList, MainStackScreenProps} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTER_HOME} from './routes';
import HomeScreen from '@src/screens/home';
import BottomTabBar from './components/BottomTabBar';
import {PlayerAnimted} from '@src/components/PlayerAnimated';
import {useSharedValue} from 'react-native-reanimated';
import {getCategory} from '@src/api/category';
import {useTypeStore} from '@src/stores/type';
const Stack = createBottomTabNavigator<HomeStackParamList>();

export interface IHomeStack extends MainStackScreenProps<'HOME_STACK'> {}
export type OHomeStack = {};
const HomeStack = forwardRef<OHomeStack, IHomeStack>((props, _ref) => {
  const {} = props;
  const {setCategoryStore} = useTypeStore();
  const videoTranslateY = useSharedValue<number>(0);
  useEffect(() => {
    getCategory().then(e => {
      if (e?.data?.data?.items) {
        setCategoryStore(e.data.data.items);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
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
        <Stack.Screen
          name={ROUTER_HOME.FAVORITE_SCREEN}
          component={HomeScreen}
        />
        <Stack.Screen
          name={ROUTER_HOME.PROFILE_SCREEN}
          component={HomeScreen}
        />
      </Stack.Navigator>
      <PlayerAnimted videoTranslateY={videoTranslateY} />
    </React.Fragment>
  );
});

export default HomeStack;
