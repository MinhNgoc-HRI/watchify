import {widthLize} from 'pmn-rn-component';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconLogo = ({width = 35, height = 32, color = '#D21F3C'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 35 32"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.1455 16.1833C19.1534 18.4474 14.0756 21.9213 14.0756 19.4355V10.0379C14.0756 5.82325 19.3309 9.95457 22.3001 12.6251C23.3667 13.5838 23.2871 15.3203 22.1455 16.1833ZM31.6887 5.21981C29.9351 2.04245 25.1135 0 16.3484 0C12.8504 0 5.46837 1.46174 2.98026 3.85849C-0.890041 7.5853 -0.525971 18.8368 1.44622 22.0142C3.41842 25.1915 7.36373 26.5528 11.3072 27.6887C15.2525 28.8226 22.9227 32 22.9227 32L21.17 28.1425C21.17 28.1425 27.3061 27.9151 31.6887 22.6953C36.0712 17.4755 33.4413 8.39717 31.6887 5.21981Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconLogo;
