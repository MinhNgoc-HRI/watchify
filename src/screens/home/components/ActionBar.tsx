import React, {forwardRef, memo, useContext, useEffect} from 'react';
import {
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {DIMENSION} from '@src/utils/dimension';
import IconLogo from '@src/assets/svg/IconLogo';
import {defaultColor} from '@src/utils/theme';
import IconConnect from '@src/assets/svg/IconConnect';
import IconAdd from '@src/assets/svg/IconAdd';
import IconNoti from '@src/assets/svg/IconNoti';
import IconSearch from '@src/assets/svg/IconSearch';
import {ActionBarContext} from '@src/stores/actionBar';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const timingConfig = {
  duration: 300,
  easing: Easing.ease,
};
const BoxAnimated = Animated.createAnimatedComponent(Box);
export const ACTION_BAR_HEIGHT = heightLize(64);
export type IActionBar = {};
export type OActionBar = {};
const ActionBar = forwardRef<OActionBar, IActionBar>((props, _ref) => {
  const {} = props;
  const status = useSharedValue(true);
  const {store} = useContext(ActionBarContext);

  useEffect(() => {
    switch (store.snapPoint) {
      case 1:
        status.value = true;
        break;
      case 0:
        status.value = false;
        break;
      default:
        status.value = true;
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.snapPoint]);
  const rootStyled = useAnimatedStyle(() => {
    const opacity = withTiming(status.value ? 1 : 0, timingConfig);
    const height = withTiming(
      status.value ? ACTION_BAR_HEIGHT : 0,
      timingConfig,
    );
    const translateY = withTiming(
      status.value ? 0 : -ACTION_BAR_HEIGHT,
      timingConfig,
    );
    return {
      opacity,
      height,
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  }, []);
  return (
    <BoxAnimated
      width={DIMENSION.width}
      row
      overflow="hidden"
      height={ACTION_BAR_HEIGHT}
      paddingHorizontal={widthLize(16)}
      style={rootStyled}>
      <Box flex={1} row center>
        <IconLogo />
        <Text
          marginLeft={widthLize(8)}
          size={fontSizeLine(20)}
          weight="bold"
          color={defaultColor.text_primary}>
          Watchify
        </Text>
      </Box>
      <Box row center justifyContent="space-around">
        <TouchRippleSingle>
          <IconConnect />
        </TouchRippleSingle>
        <Box width={widthLize(16)} />
        <TouchRippleSingle>
          <IconAdd />
        </TouchRippleSingle>
        <Box width={widthLize(16)} />
        <TouchRippleSingle>
          <IconNoti />
        </TouchRippleSingle>
        <Box width={widthLize(16)} />
        <TouchRippleSingle>
          <IconSearch />
        </TouchRippleSingle>
      </Box>
    </BoxAnimated>
  );
});

export default memo(ActionBar);
