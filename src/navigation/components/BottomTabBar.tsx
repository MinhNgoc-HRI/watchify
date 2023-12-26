import React, {forwardRef, useCallback, useImperativeHandle} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  Box,
  heightLize,
  Text,
  fontSizeLine,
  getOffset,
  TouchRippleSingle,
  widthLize,
} from 'pmn-rn-component';

import IconHome from '@src/assets/svg/IconHome';
import IconShort from '@src/assets/svg/IconShort';
import {StyleSheet} from 'react-native';

import {NavigationState} from '@react-navigation/native';
import IconLive from '@src/assets/svg/IconLive';
import IconHeart from '@src/assets/svg/IconHeart';
import IconProfile from '@src/assets/svg/IconProfile';
import {ROUTER_HOME} from '../routes';
import {HomeStackParamList} from '../types';
import {defaultColor} from '@src/utils/theme';

export const BOTTOM_TAB_HEIGHT =
  heightLize(64) + getOffset().bottom_without_margin + 10;
interface IBottomTabBar extends BottomTabBarProps {}
export type OBottomTabBar = {};
const BottomTabBar = forwardRef<OBottomTabBar, IBottomTabBar>((props, ref) => {
  const {navigation} = props;

  const {index, routes} = props.state;

  useImperativeHandle(ref, () => ({}), []);
  const renderIcon = useCallback((name: string, isActive: boolean) => {
    switch (name) {
      case ROUTER_HOME.HOME_SCREEN:
        return (
          <IconHome
            color={
              isActive ? defaultColor.primary : defaultColor.text_secondary
            }
          />
        );
      case ROUTER_HOME.SHORT_SCREEN:
        return (
          <IconShort
            color={
              isActive ? defaultColor.primary : defaultColor.text_secondary
            }
          />
        );
      case ROUTER_HOME.LIVE_STREAM_SCREEN:
        return (
          <IconLive
            color={
              isActive ? defaultColor.primary : defaultColor.text_secondary
            }
          />
        );
      case ROUTER_HOME.FAVORITE_SCREEN:
        return (
          <IconHeart
            color={
              isActive ? defaultColor.primary : defaultColor.text_secondary
            }
          />
        );
      case ROUTER_HOME.PROFILE_SCREEN:
        return (
          <IconProfile
            color={
              isActive ? defaultColor.primary : defaultColor.text_secondary
            }
          />
        );
      default:
        return null;
    }
  }, []);
  const onPress = useCallback(
    (
      route: NavigationState<HomeStackParamList>['routes'][number],
      isFocused: boolean,
    ) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    },
    [navigation],
  );
  const renderName = useCallback((value: string) => {
    switch (value) {
      case ROUTER_HOME.HOME_SCREEN:
        return 'Trang chủ';
      case ROUTER_HOME.SHORT_SCREEN:
        return 'Video ngắn';
      case ROUTER_HOME.LIVE_STREAM_SCREEN:
        return 'Trực tiếp';
      case ROUTER_HOME.FAVORITE_SCREEN:
        return 'Yêu thích';
      case ROUTER_HOME.PROFILE_SCREEN:
        return 'Tài khoản';
      default:
        return null;
    }
  }, []);
  const renderButton = useCallback(
    (
      item: NavigationState<HomeStackParamList>['routes'][number],
      isActive: boolean,
    ) => {
      return (
        <TouchRippleSingle
          key={item.key}
          touchProps={{style: styles.button}}
          onPress={() => onPress(item, isActive)}>
          <Box middle center>
            {renderIcon(item.name, isActive)}
            <Text
              textAlign="center"
              marginTop={heightLize(4)}
              size={fontSizeLine(10)}
              height={fontSizeLine(13)}
              color={
                isActive ? defaultColor.primary : defaultColor.text_secondary
              }
              weight="700">
              {renderName(item.name)}
            </Text>
          </Box>
        </TouchRippleSingle>
      );
    },
    [onPress, renderIcon, renderName],
  );
  return (
    <Box
      position="absolute"
      bottom={0}
      row
      paddingBottom={getOffset().bottom_without_margin + 10}
      color={'rgba(16,16,16,0.8)'}
      style={styles.container}>
      {routes?.map((value, i) =>
        renderButton(
          value as NavigationState<HomeStackParamList>['routes'][number],
          i === index,
        ),
      )}
    </Box>
  );
});

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: widthLize(12),
    borderTopRightRadius: widthLize(12),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    overflow: 'hidden',
    height: heightLize(64),
  },
});
