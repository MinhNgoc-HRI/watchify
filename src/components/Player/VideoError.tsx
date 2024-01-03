import {StyleSheet} from 'react-native';
import React, {forwardRef, memo, useImperativeHandle} from 'react';
import {Box, Text, fontSizeLine} from 'pmn-rn-component';
export type IVideoError = {
  isError: boolean;
};
export type OVideoError = {};
const VideoError = forwardRef<OVideoError, IVideoError>((props, ref) => {
  const {isError} = props;
  useImperativeHandle(ref, () => ({}));
  if (!isError) {
    return null;
  }
  return (
    <Box style={styles.container}>
      <Text
        size={fontSizeLine(14)}
        lineHeight={fontSizeLine(20)}
        weight="800"
        color={'rgba(255, 61, 74,1)'}>
        error
      </Text>
    </Box>
  );
});

export default memo(VideoError);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(44, 45, 47, 0.5)',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
});
