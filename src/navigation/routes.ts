import {
  HomeStackParamList,
  HomeTopTabStackParamList,
  MainStackParamList,
} from './types';

type Entries<T> = {
  [K in keyof T]: K;
};
export const ROUTER_MAIN: Entries<MainStackParamList> = {
  ON_BROAD_SCREEN: 'ON_BROAD_SCREEN',
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  HOME_STACK: 'HOME_STACK',
  EXPLORE_SCREEN: 'EXPLORE_SCREEN',
};
export const ROUTER_HOME: Entries<HomeStackParamList> = {
  HOME_SCREEN: 'HOME_SCREEN',
  SHORT_SCREEN: 'SHORT_SCREEN',
  PROFILE_SCREEN: 'PROFILE_SCREEN',
  LIVE_STREAM_SCREEN: 'LIVE_STREAM_SCREEN',
  FAVORITE_SCREEN: 'FAVORITE_SCREEN',
};
export const ROUTER_HOME_TAB: Entries<HomeTopTabStackParamList> = {
  SUGGEST_SCREEN: 'SUGGEST_SCREEN',
  FILM_SCEEN: 'FILM_SCEEN',
  STAR_SCREEN: 'STAR_SCREEN',
  ENTERTAINMENT_SCREEN: 'ENTERTAINMENT_SCREEN',
  MUSIC_SCREEN: 'MUSIC_SCREEN',
  TV_SHOW_CRCEEN: 'TV_SHOW_CRCEEN',
  SPORT_SCREEN: 'SPORT_SCREEN',
};
