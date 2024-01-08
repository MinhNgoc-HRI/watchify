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
  SEARCH_SCREEN: 'SEARCH_SCREEN',
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
  PHIM_LE: 'PHIM_LE',
  PHIM_BO: 'PHIM_BO',
  HOAT_HINH: 'HOAT_HINH',
  TV_SHOW: 'TV_SHOW',
  PHIM_VIETSUB: 'PHIM_VIETSUB',
  PHIM_THUYET_MINH: 'PHIM_THUYET_MINH',
  PHIM_BO_DANG_CHIEU: 'PHIM_BO_DANG_CHIEU',
  PHIM_BO_SAP_CHIEU: 'PHIM_BO_SAP_CHIEU',
  PHIM_BO_HOAN_THANH: 'PHIM_BO_HOAN_THANH',
};
