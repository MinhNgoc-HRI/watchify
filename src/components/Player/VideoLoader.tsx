import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {forwardRef, memo, useImperativeHandle} from 'react';
export type VideoLoaderProps = {
  loading?: boolean;
};
export type VideoLoaderRef = {};
const VideoLoader = forwardRef<VideoLoaderRef, VideoLoaderProps>(
  (props, ref) => {
    const {loading} = props;
    useImperativeHandle(ref, () => ({}));
    if (!loading) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  },
);

export default memo(VideoLoader);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
});
