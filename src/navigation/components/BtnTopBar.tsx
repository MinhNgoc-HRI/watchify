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
  const outputOpacity = routes.map((_, i) => (i === index ? 1 : 0.7));
  const convertTabName = useCallback(
    (
      n: TabNavigationState<HomeTopTabStackParamList>['routes'][number]['name'],
    ) => {
      switch (n) {
        case ROUTER_HOME_TAB.SUGGEST_SCREEN:
          return 'Đề xuất';
        case ROUTER_HOME_TAB.PHIM_LE:
          return 'Phim lẻ';
        case ROUTER_HOME_TAB.PHIM_BO:
          return 'Phim bộ';
        case ROUTER_HOME_TAB.HOAT_HINH:
          return 'Hoạt hình';
        case ROUTER_HOME_TAB.TV_SHOW:
          return 'TV Shows';
        case ROUTER_HOME_TAB.PHIM_THUYET_MINH:
          return 'Phim thuyết minh';
        case ROUTER_HOME_TAB.PHIM_VIETSUB:
          return 'Phim vietsub';
        case ROUTER_HOME_TAB.PHIM_BO_DANG_CHIEU:
          return 'Phim bộ (đang chiếu)';
        case ROUTER_HOME_TAB.PHIM_BO_SAP_CHIEU:
          return 'Phim bộ (sắp chiếu)';
        case ROUTER_HOME_TAB.PHIM_BO_HOAN_THANH:
          return 'Phim bộ (hoàn thành)';
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
        marginHorizontal={widthLize(6)}
        paddingVertical={heightLize(12)}
        style={{
          opacity: position.interpolate({
            inputRange: input,
            outputRange: outputOpacity,
            extrapolate: 'clamp',
          }),
        }}>
        <TextAnimated
          weight="700"
          size={fontSizeLine(14)}
          lineHeight={fontSizeLine(20)}
          color={defaultColor.text_primary}>
          {convertTabName(name)}
        </TextAnimated>
        <BoxAnimated
          position="absolute"
          bottom={0}
          left={0}
          height={heightLize(3)}
          width={'100%'}
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
