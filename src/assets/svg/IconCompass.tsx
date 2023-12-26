import {widthLize} from 'pmn-rn-component';
import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect, Circle} from 'react-native-svg';
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconCompass = ({width = 20, height = 20, color = '#fff'}: IconProps) => {
  return (
    <Svg width={widthLize(width)} height={widthLize(height)} fill="none">
      <G clip-path="url(#clip0_18994_106306)">
        <Circle cx="10" cy="10" r="9.25" stroke={color} stroke-width="1.5" />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.6568 4.34326L7.87867 7.8788L4.34314 15.657L12.1213 12.1214L15.6568 4.34326ZM9.14627 10.8539C8.67476 10.3824 8.67476 9.6179 9.14627 9.14639C9.61778 8.67487 10.3823 8.67487 10.8538 9.14639C11.3253 9.6179 11.3253 10.3824 10.8538 10.8539C10.3823 11.3254 9.61778 11.3254 9.14627 10.8539Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_18994_106306">
          <Rect
            width={widthLize(width)}
            height={widthLize(height)}
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default IconCompass;
