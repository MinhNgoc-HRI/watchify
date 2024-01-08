import {widthLize} from 'pmn-rn-component';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconPrev = ({width = 24, height = 24, color = '#B0B0B8'}: IconProps) => {
  return (
    <Svg
      width={widthLize(width)}
      height={widthLize(height)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.7253 3.7391C18.642 3.00576 19.9999 3.65841 19.9999 4.83232V19.1678C19.9999 20.3417 18.642 20.9944 17.7253 20.261L8.76566 13.0933C8.06509 12.5328 8.06509 11.4673 8.76566 10.9068L17.7253 3.7391ZM6.25 5.00007C6.25 4.30971 5.69036 3.75007 5 3.75007C4.30964 3.75007 3.75 4.30971 3.75 5.00007V19.0001C3.75 19.6904 4.30964 20.2501 5 20.2501C5.69036 20.2501 6.25 19.6904 6.25 19.0001V5.00007Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconPrev;
