import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import React, {forwardRef, memo, useCallback, useContext, useRef} from 'react';
import {HomeTopTabStackScreenProps} from '@src/navigation/types';
import {ScrollView} from 'react-native-gesture-handler';
import {defaultColor} from '@src/utils/theme';
import {Box} from 'pmn-rn-component';
import {ActionBarContext, setActionBarPoint} from '@src/stores/actionBar';
export interface ISuggestScreen
  extends HomeTopTabStackScreenProps<'SUGGEST_SCREEN'> {}
export type OSuggestScreen = {};
const SuggestScreen = forwardRef<OSuggestScreen, ISuggestScreen>(
  (props, _ref) => {
    const {} = props;
    const {store, dispatch} = useContext(ActionBarContext);
    const {snapPoint} = store;
    const prevOffset = useRef(0);

    const onScroll = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const scrollDirection =
          currentOffset > prevOffset.current ? 'down' : 'up';
        if (scrollDirection === 'down' && snapPoint === 1) {
          dispatch(setActionBarPoint(0));
        } else if (scrollDirection === 'up' && snapPoint === 0) {
          dispatch(setActionBarPoint(1));
        }
        prevOffset.current = currentOffset;
      },
      [snapPoint, dispatch],
    );
    return (
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.content}
        scrollEventThrottle={16}
        onScroll={onScroll}>
        <Box flex={1} height={2000} />
      </ScrollView>
    );
  },
);

export default memo(SuggestScreen);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: defaultColor.bg_primary,
  },
  content: {
    flexGrow: 1,
  },
});
