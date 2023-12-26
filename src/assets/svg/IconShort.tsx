import {widthLize} from 'pmn-rn-component';
import React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconShort = ({width = 24, height = 24, color = '#B0B0B8'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 24 24"
      fill="none">
      <G clip-path="url(#clip0_18970_44935)">
        <Path
          d="M19.5 13.5C19.5 6.75 12 2.25 12 2.25C12 2.25 4.5 6.75 4.5 13.5C4.5 15.4891 5.29018 17.3968 6.6967 18.8033C8.10322 20.2098 10.0109 21 12 21C13.9891 21 15.8968 20.2098 17.3033 18.8033C18.7098 17.3968 19.5 15.4891 19.5 13.5Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.25 17.25C8.25 18.2446 8.64509 19.1984 9.34835 19.9017C10.0516 20.6049 11.0054 21 12 21C12.9946 21 13.9484 20.6049 14.6517 19.9017C15.3549 19.1984 15.75 18.2446 15.75 17.25C15.75 13.5 12 11.25 12 11.25C12 11.25 8.25 13.5 8.25 17.25Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_18970_44935">
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

export default IconShort;
