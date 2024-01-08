import {widthLize} from 'pmn-rn-component';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconShare = ({width = 24, height = 24, color = '#B0B0B8'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M13.0692 4.94342C13.0692 4.56185 13.2991 4.21786 13.6516 4.07184C14.0041 3.92582 14.4099 4.00653 14.6797 4.27634L21.7237 11.3203C22.0921 11.6888 22.0921 12.2861 21.7237 12.6545L14.6797 19.6985C14.4099 19.9683 14.0041 20.049 13.6516 19.903C13.2991 19.757 13.0692 19.413 13.0692 19.0314V15.8695C8.79683 16.0595 5.86158 17.5754 3.71115 20.586C3.45266 20.9479 2.97653 21.0801 2.56845 20.9033C2.16038 20.7265 1.93119 20.2888 2.01841 19.8527C2.54366 17.2264 3.6045 14.5433 5.50393 12.3725C7.27647 10.3467 9.74303 8.81016 13.0692 8.17013V4.94342Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconShare;
