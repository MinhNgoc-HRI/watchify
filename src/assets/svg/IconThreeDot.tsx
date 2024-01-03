import {widthLize} from 'pmn-rn-component';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const IconThreeDot = ({width = 24, height = 24, color = '#FFF'}: IconProps) => {
  return (
    <Svg width={widthLize(width)} height={widthLize(height)} fill="none">
      <Path
        d="M12 2.5C10.8954 2.5 10 3.40162 10 4.51382C10 5.62603 10.8954 6.52765 12 6.52765C13.1046 6.52765 14 5.62603 14 4.51382C14 3.40162 13.1046 2.5 12 2.5Z"
        fill={color}
      />
      <Path
        d="M12 9.98617C10.8954 9.98617 10 10.8878 10 12C10 13.1122 10.8954 14.0138 12 14.0138C13.1046 14.0138 14 13.1122 14 12C14 10.8878 13.1046 9.98617 12 9.98617Z"
        fill={color}
      />
      <Path
        d="M12 17.4723C10.8954 17.4723 10 18.374 10 19.4862C10 20.5984 10.8954 21.5 12 21.5C13.1046 21.5 14 20.5984 14 19.4862C14 18.374 13.1046 17.4723 12 17.4723Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconThreeDot;
