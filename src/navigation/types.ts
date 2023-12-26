import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
export type MainStackParamList = {
  ON_BROAD_SCREEN: undefined;
  LOGIN_SCREEN: undefined;
  HOME_STACK: NavigatorScreenParams<HomeStackParamList>;
  EXPLORE_SCREEN: undefined;
};
export type HomeStackParamList = {
  HOME_SCREEN: NavigatorScreenParams<HomeTopTabStackParamList>;
  SHORT_SCREEN: undefined;
  LIVE_STREAM_SCREEN: undefined;
  FAVORITE_SCREEN: undefined;
  PROFILE_SCREEN: undefined;
};
export type HomeTopTabStackParamList = {
  SUGGEST_SCREEN: undefined;
  FILM_SCEEN: undefined;
  STAR_SCREEN: undefined;
  ENTERTAINMENT_SCREEN: undefined;
  MUSIC_SCREEN: undefined;
  TV_SHOW_CRCEEN: undefined;
  SPORT_SCREEN: undefined;
};
export type RoutesType = MainStackParamList;
export type MainStackScreenProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;
export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeStackParamList, T>,
    MainStackScreenProps<keyof MainStackParamList>
  >;

export type HomeTopTabStackScreenProps<
  T extends keyof HomeTopTabStackParamList,
> = CompositeScreenProps<
  MaterialTopTabScreenProps<HomeTopTabStackParamList, T>,
  CompositeScreenProps<
    HomeStackScreenProps<keyof HomeStackParamList>,
    MainStackScreenProps<keyof MainStackParamList>
  >
>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
