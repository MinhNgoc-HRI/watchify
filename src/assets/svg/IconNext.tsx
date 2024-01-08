import {widthLize} from 'pmn-rn-component';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconNext = ({width = 24, height = 24, color = '#B0B0B8'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 4.83232C4 3.65841 5.35791 3.00577 6.27457 3.7391L15.2343 10.9068C15.9348 11.4673 15.9348 12.5328 15.2343 13.0933L6.27457 20.261C5.3579 20.9944 4 20.3417 4 19.1678V4.83232ZM20.25 5.00006C20.25 4.30971 19.6904 3.75006 19 3.75006C18.3096 3.75006 17.75 4.30971 17.75 5.00006V19.0001C17.75 19.6904 18.3096 20.2501 19 20.2501C19.6904 20.2501 20.25 19.6904 20.25 19.0001V5.00006Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconNext;
