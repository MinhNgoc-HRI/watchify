import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
export type MainStackParamList = {
  ON_BROAD_SCREEN: undefined;
  LOGIN_SCREEN: undefined;
  HOME_STACK: NavigatorScreenParams<HomeStackParamList>;
};
export type HomeStackParamList = {
  HOME_SCREEN: undefined;
  SHORT_SCREEN: undefined;
  PROFILE_SCREEN: undefined;
};
export type RoutesType = MainStackParamList;
export type MainStackScreenProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;
export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeStackParamList, T>,
    MainStackScreenProps<keyof MainStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
