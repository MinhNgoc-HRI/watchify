import React, {forwardRef, memo} from 'react';
import {MainStackScreenProps} from '@src/navigation/types';
import {Box, Text} from 'pmn-rn-component';
export interface IOnBroadScreen
  extends MainStackScreenProps<'ON_BROAD_SCREEN'> {}
export type OOnBroadScreen = {};
const OnBroadScreen = forwardRef<OOnBroadScreen, IOnBroadScreen>(
  (props, _ref) => {
    const {} = props;
    return (
      <Box flex={1} middle center>
        <Text size={16}>index</Text>
      </Box>
    );
  },
);

export default memo(OnBroadScreen);
