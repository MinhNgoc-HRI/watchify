import {widthLize} from 'pmn-rn-component';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconFilter = ({width = 24, height = 24, color = '#fff'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        d="M6 12L6 5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M12 8L12 5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M6 19L6 16"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M18 19L18 17"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M12 19L12 12"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M10 8L14 8"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M4 16L8 16"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M16 17H20"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M18 13L18 5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default IconFilter;
