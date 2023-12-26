import React, {forwardRef, memo, useCallback, useImperativeHandle} from 'react';
import {HomeTopTabStackParamList} from '@src/navigation/types';
import {TabNavigationState} from '@react-navigation/native';
import {ROUTER_HOME_TAB} from '@src/navigation/routes';
import {
  Box,
  Text,
  fontSizeLine,
  TouchRippleSingle,
  widthLize,
  heightLize,
} from 'pmn-rn-component';
import {Animated} from 'react-native';
import {defaultColor} from '@src/utils/theme';
const BoxAnimated = Animated.createAnimatedComponent(Box);
const TextAnimated = Animated.createAnimatedComponent(Text);
export type IButtonTopBar = {
  index: number;
  routes: TabNavigationState<HomeTopTabStackParamList>['routes'];
  data: TabNavigationState<HomeTopTabStackParamList>['routes'][number];
  position: Animated.AnimatedInterpolation<number>;
  onPress: (
    key: TabNavigationState<HomeTopTabStackParamList>['routes'][number]['key'],
  ) => void;
};
export type OButtonTopBar = {};
const ButtonTopBar = forwardRef<OButtonTopBar, IButtonTopBar>((props, ref) => {
  const {name, key} = props.data;
  const {onPress, position, routes, index} = props;

  useImperativeHandle(ref, () => ({}));
  const input = routes.map((_, i) => i);
  const output = routes.map((_, i) => (i === index ? 1 : 0));
  const outputColor = routes.map((_, i) =>
    i === index ? 'rgba(255,255,255,1)' : 'rgba(176,176,187,1)',
  );
  const convertTabName = useCallback(
    (
      n: TabNavigationState<HomeTopTabStackParamList>['routes'][number]['name'],
    ) => {
      switch (n) {
        case ROUTER_HOME_TAB.SUGGEST_SCREEN:
          return 'Đề xuất';
        case ROUTER_HOME_TAB.FILM_SCEEN:
          return 'Phim';
        case ROUTER_HOME_TAB.STAR_SCREEN:
          return 'Sao';
        case ROUTER_HOME_TAB.ENTERTAINMENT_SCREEN:
          return 'Giải trí';
        case ROUTER_HOME_TAB.MUSIC_SCREEN:
          return 'Nhạc';
        case ROUTER_HOME_TAB.TV_SHOW_CRCEEN:
          return 'TV Show';
        case ROUTER_HOME_TAB.SPORT_SCREEN:
          return 'Thể thao';
        case ROUTER_HOME_TAB.SUGGEST_SCREEN:
          return 'Gợi ý';
        default:
          return '';
      }
    },
    [],
  );

  return (
    <TouchRippleSingle onPress={() => onPress(key)}>
      <BoxAnimated
        middle
        center
        paddingVertical={heightLize(12)}
        width={widthLize(70)}>
        <TextAnimated
          weight="700"
          size={fontSizeLine(14)}
          lineHeight={fontSizeLine(20)}
          marginLeft={widthLize(4)}
          style={{
            color: position.interpolate({
              inputRange: input,
              outputRange: outputColor,
            }),
          }}>
          {convertTabName(name)}
        </TextAnimated>
        <BoxAnimated
          position="absolute"
          bottom={0}
          height={heightLize(3)}
          width={widthLize(70)}
          style={{
            opacity: position.interpolate({
              inputRange: input,
              outputRange: output,
              extrapolate: 'clamp',
            }),
          }}
          color={defaultColor.primary}
        />
      </BoxAnimated>
    </TouchRippleSingle>
  );
});
export default memo(ButtonTopBar);
