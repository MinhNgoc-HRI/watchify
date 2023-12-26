import {widthLize} from 'pmn-rn-component';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconProfile = ({
  width = 24,
  height = 24,
  color = '#8A8B93',
}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19.1109 20.0001V18.2223C19.1109 17.2793 18.7363 16.3749 18.0695 15.7081C17.4027 15.0414 16.4983 14.6667 15.5553 14.6667H8.44423C7.50124 14.6667 6.59687 15.0414 5.93007 15.7081C5.26327 16.3749 4.88867 17.2793 4.88867 18.2223V20.0001"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.9998 11.1111C13.9635 11.1111 15.5554 9.51923 15.5554 7.55556C15.5554 5.59188 13.9635 4 11.9998 4C10.0362 4 8.44427 5.59188 8.44427 7.55556C8.44427 9.51923 10.0362 11.1111 11.9998 11.1111Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconProfile;
