import {StyleProp, ViewStyle} from 'react-native';
import React, {forwardRef, memo, useImperativeHandle} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {Box} from 'pmn-rn-component';
const hitSlop = {left: 8, bottom: 4, right: 8, top: 4};

const BoxAnimated = Animated.createAnimatedComponent(Box);
export type ITapControler = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children?: any;
};
export type OTapControler = {};
const TapControler = forwardRef<OTapControler, ITapControler>((props, ref) => {
  const {onPress, style, children} = props;
  useImperativeHandle(ref, () => ({}));
  const gesture = Gesture.Tap().onEnd((_e, success) => {
    if (success) {
      onPress();
    }
  });
  return (
    <GestureDetector gesture={gesture}>
      <BoxAnimated hitSlop={hitSlop} style={style}>
        {children}
      </BoxAnimated>
    </GestureDetector>
  );
});

export default memo(TapControler);
