import React, {forwardRef, useEffect} from 'react';
import {HomeStackParamList, MainStackScreenProps} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTER_HOME} from './routes';
import HomeScreen from '@src/screens/home';
import BlankScreen from '@src/screens/blank';
import BottomTabBar from './components/BottomTabBar';
import {PlayerAnimted} from '@src/components/PlayerAnimated';
import {useSharedValue} from 'react-native-reanimated';
import {useTypeStore} from '@src/stores/type';
import {getListCategory} from '@src/api/category';
import {getListCountry} from '@src/api/country';
const Stack = createBottomTabNavigator<HomeStackParamList>();

export interface IHomeStack extends MainStackScreenProps<'HOME_STACK'> {}
export type OHomeStack = {};
const HomeStack = forwardRef<OHomeStack, IHomeStack>((props, _ref) => {
  const {} = props;
  const {setCategoryStore, setCountryStore} = useTypeStore();
  const videoTranslateY = useSharedValue<number>(0);
  useEffect(() => {
    getListCategory().then(e => {
      if (e?.data?.data?.items) {
        setCategoryStore(e.data.data.items);
      }
    });
    getListCountry().then(e => {
      if (e?.data?.data?.items) {
        setCountryStore(e.data.data.items);
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
        <Stack.Screen name={ROUTER_HOME.SHORT_SCREEN} component={BlankScreen} />
        <Stack.Screen
          name={ROUTER_HOME.LIVE_STREAM_SCREEN}
          component={BlankScreen}
        />
        <Stack.Screen
          name={ROUTER_HOME.FAVORITE_SCREEN}
          component={BlankScreen}
        />
        <Stack.Screen
          name={ROUTER_HOME.PROFILE_SCREEN}
          component={BlankScreen}
        />
      </Stack.Navigator>
      <PlayerAnimted videoTranslateY={videoTranslateY} />
    </React.Fragment>
  );
});

export default HomeStack;
