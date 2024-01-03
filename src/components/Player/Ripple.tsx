/* eslint-disable react-native/no-inline-styles */
import {StyleProp, ViewStyle} from 'react-native';
import React, {forwardRef, memo, useImperativeHandle, useState} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Box} from 'pmn-rn-component';

const BoxAnimated = Animated.createAnimatedComponent(Box);
export type RippleTargetEvent = {x: number; y: number};

export type IRipple = {
  children: React.ReactElement;
  duration?: number;
  overflow?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  onAnimationEnd?: () => void;
  style?: StyleProp<ViewStyle>;
};
export type ORipple = {
  onPress: ({x, y}: RippleTargetEvent) => void;
};
const Ripple = forwardRef<ORipple, IRipple>((props, ref) => {
  const {
    children,
    containerStyle,
    duration = 600,
    backgroundColor = 'rgba(255,255,255,.3)',
    onAnimationEnd,
    overflow,
    style,
  } = props;
  const scale = useSharedValue(0);
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const isFinished = useSharedValue(false);
  const rippleOpacity = useSharedValue(1);
  const [radius, setRadius] = useState(-1);

  const rStyle = useAnimatedStyle(() => {
    const translateX = centerX.value - radius;
    const translateY = centerY.value - radius;

    return {
      opacity: rippleOpacity.value,

      transform: [
        {translateX},
        {translateY},
        {
          scale: scale.value,
        },
      ],
    };
  }, [radius]);
  useImperativeHandle(
    ref,
    () => ({
      onPress: ({x, y}) => {
        'worklet';

        centerX.value = x;
        centerY.value = y;

        rippleOpacity.value = 1;
        scale.value = 0;
        scale.value = withTiming(1, {duration}, finised => {
          if (finised) {
            isFinished.value = true;
            scale.value = withTiming(0, {duration: 0});
            if (onAnimationEnd) {
              runOnJS(onAnimationEnd)();
            }
          }
        });
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Box
      onLayout={({
        nativeEvent: {
          layout: {width, height},
        },
      }) => {
        setRadius(Math.sqrt(width ** 2 + height ** 2));
      }}
      style={[style]}
      pointerEvents="none">
      {radius > -1 && (
        <BoxAnimated
          style={[
            style,
            containerStyle,
            {overflow: !overflow ? 'hidden' : 'visible'},
          ]}>
          {children}
          <BoxAnimated
            style={[
              {
                backgroundColor,
                position: 'absolute',
                top: 0,
                left: 0,
                width: radius * 2,
                height: radius * 2,
                borderRadius: radius,
                zIndex: 1121,
              },
              rStyle,
            ]}
          />
        </BoxAnimated>
      )}
    </Box>
  );
});

export default memo(Ripple);
