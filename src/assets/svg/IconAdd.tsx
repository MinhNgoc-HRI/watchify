import {widthLize} from 'pmn-rn-component';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
type IcocProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconAdd = ({width = 24, height = 24, color = '#fff'}: IcocProps) => {
  return (
    <Svg width={widthLize(width)} height={widthLize(height)} fill="none">
      <Path
        d="M12 3V21"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 12H21"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconAdd;
