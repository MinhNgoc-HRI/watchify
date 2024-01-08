import React, {forwardRef, memo} from 'react';
import {
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {DIMENSION} from '@src/utils/dimension';
import IconLogo from '@src/assets/svg/IconLogo';
import {defaultColor} from '@src/utils/theme';
import IconConnect from '@src/assets/svg/IconConnect';
import IconAdd from '@src/assets/svg/IconAdd';
import IconNoti from '@src/assets/svg/IconNoti';
import IconSearch from '@src/assets/svg/IconSearch';
import {useNavigation} from '@react-navigation/native';
import {ROUTER_MAIN} from '@src/navigation/routes';

export const ACTION_BAR_HEIGHT = heightLize(64);
export type IActionBar = {};
export type OActionBar = {};
const ActionBar = forwardRef<OActionBar, IActionBar>((props, _ref) => {
  const {} = props;
  const navigation = useNavigation();
  return (
    <Box
      width={DIMENSION.width}
      row
      overflow="hidden"
      height={ACTION_BAR_HEIGHT}
      paddingHorizontal={widthLize(16)}>
      <Box flex={1} row center>
        <IconLogo />
        <Text
          marginLeft={widthLize(8)}
          size={fontSizeLine(20)}
          weight="bold"
          color={defaultColor.text_primary}>
          Watchify
        </Text>
      </Box>
      <Box row center justifyContent="space-around">
        <TouchRippleSingle>
          <IconConnect />
        </TouchRippleSingle>
        <Box width={widthLize(16)} />
        <TouchRippleSingle>
          <IconAdd />
        </TouchRippleSingle>
        <Box width={widthLize(16)} />
        <TouchRippleSingle>
          <IconNoti />
        </TouchRippleSingle>
        <Box width={widthLize(16)} />
        <TouchRippleSingle
          onPress={() => navigation.navigate(ROUTER_MAIN.SEARCH_SCREEN)}>
          <IconSearch />
        </TouchRippleSingle>
      </Box>
    </Box>
  );
});

export default memo(ActionBar);
