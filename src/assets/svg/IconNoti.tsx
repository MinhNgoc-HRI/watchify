import {widthLize} from 'pmn-rn-component';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path, Circle} from 'react-native-svg';
const config = {
  duration: 300,
  easing: Easing.linear,
};
const CircleAnimated = Animated.createAnimatedComponent(Circle);
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconNoti = ({width = 24, height = 24, color = '#fff'}: IconProps) => {
  const scare = useSharedValue(0);
  useEffect(() => {
    scare.value = withRepeat(
      withSequence(withTiming(3, config), withTiming(4, config)),
      -1,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const animatedProps = useAnimatedProps(() => {
    return {
      r: scare.value,
    };
  });
  return (
    <Svg width={widthLize(width)} height={widthLize(height)} fill="none">
      <Path
        d="M13.1266 4.60775C12.7601 4.52221 12.3823 4.47803 12 4.47803C10.6855 4.47803 9.42479 5.00021 8.49529 5.92971C7.5658 6.85921 7.04361 8.11988 7.04361 9.43439C7.04361 15.2168 4.56543 16.8689 4.56543 16.8689H19.4345C19.4345 16.8689 17.6395 15.6723 17.1049 11.7514"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 20L14 20"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <CircleAnimated
        cx="17"
        cy="7"
        animatedProps={animatedProps}
        fill="#FF3B30"
      />
    </Svg>
  );
};

export default IconNoti;
