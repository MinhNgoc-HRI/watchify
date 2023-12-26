import {widthLize} from 'pmn-rn-component';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconHome = ({width = 24, height = 24, color = '#B0B0B8'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M11.3861 2.47751L3.38606 8.69973C3.14247 8.88919 3 9.18049 3 9.48908V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H8C8.55228 22 9 21.5523 9 21V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V21C15 21.5523 15.4477 22 16 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V9.48908C21 9.18049 20.8575 8.88919 20.6139 8.69973L12.6139 2.47751C12.2528 2.19665 11.7472 2.19665 11.3861 2.47751Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconHome;
