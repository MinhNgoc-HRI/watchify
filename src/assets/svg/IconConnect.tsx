import {widthLize} from 'pmn-rn-component';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconConnect = ({width = 24, height = 24, color = '#fff'}: IconProps) => {
  return (
    <Svg width={widthLize(width)} height={widthLize(height)} fill="none">
      <Path
        d="M2 16.1C2.96089 16.296 3.84294 16.7702 4.53638 17.4636C5.22982 18.1571 5.70403 19.0391 5.9 20M2 12.05C4.03079 12.2759 5.92428 13.186 7.36911 14.6309C8.81395 16.0757 9.72414 17.9692 9.95 20M2 8V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H14"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 20H2.01"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconConnect;
