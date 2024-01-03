import {StyleSheet} from 'react-native';
import React, {forwardRef, useImperativeHandle} from 'react';
import {TouchRippleSingle, Text, Box} from 'pmn-rn-component';
export type IVideoReplayed = {
  isPlayed: boolean;
  onPress: () => void;
};
export type OVideoReplayed = {};
const VideoReplayed = forwardRef<OVideoReplayed, IVideoReplayed>(
  (props, ref) => {
    const {isPlayed, onPress} = props;
    useImperativeHandle(ref, () => ({}));

    if (!isPlayed) {
      return null;
    }
    return (
      <TouchRippleSingle onPress={onPress}>
        <Box style={styles.buttonStyle}>
          <Text size={0}>replay</Text>
        </Box>
      </TouchRippleSingle>
    );
  },
);

export default VideoReplayed;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    zIndex: 1,
  },
});
