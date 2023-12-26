import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Box} from 'pmn-rn-component';
const BoxAnimated = Animated.createAnimatedComponent(Box);
export const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  inActiveBg?: string;
  length: number;
  animValue: SharedValue<number>;
  isRotate?: boolean;
}> = props => {
  const {animValue, index, length, backgroundColor, isRotate, inActiveBg} =
    props;
  const width = 24;
  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }
    const w = interpolate(
      animValue?.value,
      inputRange,
      [8, 24, 8],
      Extrapolation.CLAMP,
    );
    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolation.CLAMP,
          ),
        },
      ],
      width: w,
    };
  }, [animValue, index, length]);
  return (
    <Box
      color={inActiveBg || 'rgba(255, 255, 255, 0.4)'}
      height={8}
      radius={4}
      overflow="hidden"
      marginRight={8}
      style={{
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}>
      <BoxAnimated
        color={backgroundColor}
        radius={50}
        flex={1}
        style={animStyle}
      />
    </Box>
  );
};
