import React, {forwardRef, memo} from 'react';
import {HomeStackScreenProps} from '@src/navigation/types';
import {Box, getOffset} from 'pmn-rn-component';
import HomeTopTabStack from '@src/navigation/HomeTopTabStack';
import {defaultColor} from '@src/utils/theme';
import ActionBar from './components/ActionBar';
export interface IHomeScreen extends HomeStackScreenProps<'HOME_SCREEN'> {}
export type OHomeScreen = {};
const HomeScreen = forwardRef<OHomeScreen, IHomeScreen>((props, _ref) => {
  const {} = props;
  return (
    <Box
      flex={1}
      color={defaultColor.bg_primary}
      paddingTop={getOffset().top_without_margin}>
      <ActionBar />
      <HomeTopTabStack />
    </Box>
  );
});

export default memo(HomeScreen);
