// file này hỗ trợ xử lý navigaiton ngoài màn hình

import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {MainStackParamList, RoutesType} from './types';

export const refNavigation = createNavigationContainerRef<MainStackParamList>();

export const navigateFromCurrentScreen = (
  router: keyof RoutesType,
  params?: StackScreenProps<RoutesType>['route']['params'],
) => {
  if (refNavigation.isReady()) {
    refNavigation.dispatch(CommonActions.navigate(router, params));
  }
};
