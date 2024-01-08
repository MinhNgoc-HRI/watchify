import React from 'react';
import {Box, Text, fontSizeLine} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';

const BlankScreen = () => {
  return (
    <Box flex={1} color={defaultColor.bg_primary} middle center>
      <Text size={fontSizeLine(16)} color={defaultColor.border} weight="600">
        Tính năng đang phát triển
      </Text>
    </Box>
  );
};

export default BlankScreen;
