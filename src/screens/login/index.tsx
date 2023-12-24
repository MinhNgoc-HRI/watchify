import React, {forwardRef, memo} from 'react';
import {MainStackScreenProps} from '@src/navigation/types';
import {Box, Text} from 'pmn-rn-component';
export interface ILoginScreen extends MainStackScreenProps<'LOGIN_SCREEN'> {}
export type OLoginScreen = {};
const LoginScreen = forwardRef<OLoginScreen, ILoginScreen>((props, _ref) => {
  const {} = props;
  return (
    <Box>
      <Text size={16}>LoginScreen</Text>
    </Box>
  );
});

export default memo(LoginScreen);
