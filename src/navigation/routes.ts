import {HomeStackParamList, MainStackParamList} from './types';

type Entries<T> = {
  [K in keyof T]: K;
};
export const ROUTER_MAIN: Entries<MainStackParamList> = {
  ON_BROAD_SCREEN: 'ON_BROAD_SCREEN',
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  HOME_STACK: 'HOME_STACK',
};
export const ROUTER_HOME: Entries<HomeStackParamList> = {
  HOME_SCREEN: 'HOME_SCREEN',
  SHORT_SCREEN: 'SHORT_SCREEN',
  PROFILE_SCREEN: 'PROFILE_SCREEN',
};
