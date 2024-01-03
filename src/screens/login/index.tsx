import React, {forwardRef, memo} from 'react';
import {MainStackScreenProps} from '@src/navigation/types';
import {Box, Text, getOffset} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';

export interface ILoginScreen extends MainStackScreenProps<'LOGIN_SCREEN'> {}
export type OLoginScreen = {};
const LoginScreen = forwardRef<OLoginScreen, ILoginScreen>((props, _ref) => {
  const {} = props;

  return (
    <Box
      flex={1}
      color={defaultColor.bg_primary}
      paddingTop={getOffset().top_without_margin}>
      <Text size={16}>LoginScreen</Text>
    </Box>
  );
});

export default memo(LoginScreen);
