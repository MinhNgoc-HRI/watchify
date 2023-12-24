import React, {forwardRef} from 'react';
import {MainStackScreenProps} from './types';
import {Box, Text} from 'pmn-rn-component';
export interface IHomeStack extends MainStackScreenProps<'HOME_STACK'> {}
export type OHomeStack = {};
const HomeStack = forwardRef<OHomeStack, IHomeStack>((props, _ref) => {
  const {} = props;
  return (
    <Box flex={1} middle center>
      <Text size={16}>HomeStack</Text>
    </Box>
  );
});

export default HomeStack;
