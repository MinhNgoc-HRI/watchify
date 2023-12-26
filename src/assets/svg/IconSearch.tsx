import {widthLize} from 'pmn-rn-component';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconSearch = ({width = 24, height = 24, color = '#fff'}: IconProps) => {
  return (
    <Svg width={widthLize(width)} height={widthLize(height)} fill="none">
      <Path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.0004 20.9999L16.6504 16.6499"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconSearch;
