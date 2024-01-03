import {widthLize} from 'pmn-rn-component';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconDropdown = ({width = 16, height = 16, color = '#fff'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      fill="none"
      viewBox="0 0 16 16">
      <Path
        d="M4.66667 5.33398C4.408 5.33398 4.17267 5.48362 4.06295 5.71788C3.95323 5.95214 3.98893 6.22872 4.15453 6.42744L7.48786 10.4274C7.61452 10.5794 7.80215 10.6673 8.00001 10.6673C8.19786 10.6673 8.38549 10.5794 8.51216 10.4274L11.8455 6.42744C12.0111 6.22872 12.0468 5.95214 11.9371 5.71788C11.8273 5.48362 11.592 5.33398 11.3333 5.33398H4.66667Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconDropdown;
