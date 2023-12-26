import {widthLize} from 'pmn-rn-component';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconLive = ({width = 24, height = 24, color = '#B0B0B8'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19.0628 20.0793C20.8773 18.269 22 15.7656 22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13C2 15.7608 3.11875 18.2602 4.92764 20.0698"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.2407 17.2446C17.3276 16.1587 18 14.6578 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 14.6624 6.67608 16.1669 7.7683 17.2535"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z"
        fill={color}
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconLive;
