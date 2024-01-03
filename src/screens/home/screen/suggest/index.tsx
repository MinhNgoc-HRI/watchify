import React, {forwardRef, memo} from 'react';
import {HomeTopTabStackScreenProps} from '@src/navigation/types';
import {defaultColor} from '@src/utils/theme';
import {Box} from 'pmn-rn-component';
import ListFilm from '../film/components/ListFilm';
import {useControlList} from '../film/hook/useControlList';
import {APIs} from '@src/api/config';
export interface ISuggestScreen
  extends HomeTopTabStackScreenProps<'SUGGEST_SCREEN'> {}
export type OSuggestScreen = {};
const SuggestScreen = forwardRef<OSuggestScreen, ISuggestScreen>(
  (props, _ref) => {
    const {} = props;
    const {films, onEndReachedHandle, loading} = useControlList(
      APIs.HOME,
      1,
      undefined,
      undefined,
      false,
    );
    return (
      <Box flex={1} color={defaultColor.bg_primary}>
        <ListFilm
          films={films}
          onEndReachedHandle={onEndReachedHandle}
          loading={loading}
        />
      </Box>
    );
  },
);

export default memo(SuggestScreen);
