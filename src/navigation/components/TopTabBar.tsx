import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {
  Box,
  Text,
  heightLize,
  widthLize,
  fontSizeLine,
  TouchRippleSingle,
} from 'pmn-rn-component';
import IconCompass from '@src/assets/svg/IconCompass';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeTopTabStackParamList} from '@src/navigation/types';
import {TabNavigationState} from '@react-navigation/native';

import BtnTopBar from './BtnTopBar';

interface ITopTabBar extends MaterialTopTabBarProps {}
type OTopTabBar = {};
const TopTabBar = forwardRef<OTopTabBar, ITopTabBar>((props, ref) => {
  const {position, state, jumpTo} = props;
  const {routes} = state;

  const refScrollView = useRef<ScrollView>(null);
  useImperativeHandle(ref, () => ({}));
  const jumbToTab = useCallback(
    (
      key: TabNavigationState<HomeTopTabStackParamList>['routes'][number]['key'],
    ) => {
      jumpTo(key);
    },
    [jumpTo],
  );

  return (
    <Box row middle marginLeft={widthLize(12)}>
      <TouchRippleSingle onPress={() => {}}>
        <Box row paddingVertical={heightLize(12)} paddingRight={widthLize(10)}>
          <IconCompass />
          <Text
            weight="700"
            size={fontSizeLine(14)}
            lineHeight={fontSizeLine(20)}
            color="#B0B0B8"
            marginLeft={widthLize(4)}>
            Khám phá
          </Text>
        </Box>
      </TouchRippleSingle>
      <ScrollView
        ref={refScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: widthLize(10),
        }}>
        {routes?.map((e, i) => (
          <BtnTopBar
            key={e.key}
            index={i}
            routes={
              routes as TabNavigationState<HomeTopTabStackParamList>['routes']
            }
            data={
              e as TabNavigationState<HomeTopTabStackParamList>['routes'][number]
            }
            position={position}
            onPress={jumbToTab}
          />
        ))}
      </ScrollView>
    </Box>
  );
});

export default memo(TopTabBar);
