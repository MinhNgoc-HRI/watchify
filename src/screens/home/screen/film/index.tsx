import React, {forwardRef, memo} from 'react';
import {HomeTopTabStackScreenProps} from '@src/navigation/types';
import {Box} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import Filter from './components/Filter';
import ListFilm from './components/ListFilm';
import {useTypeStore} from '@src/stores/type';
import {useControlList} from './hook/useControlList';
import {APIs} from '@src/api/config';
export interface IFilmScreen extends HomeTopTabStackScreenProps<'PHIM_LE'> {}
export type OFilmScreen = {};
const FilmScreen = forwardRef<OFilmScreen, IFilmScreen>((props, _ref) => {
  const {} = props;
  const {category} = useTypeStore();
  const {films, onEndReachedHandle, loading} = useControlList(
    APIs.FIML,
    1,
    undefined,
    undefined,
    true,
  );
  return (
    <Box flex={1} color={defaultColor.bg_primary}>
      <Filter data={category} />
      <ListFilm
        films={films}
        onEndReachedHandle={onEndReachedHandle}
        loading={loading}
      />
    </Box>
  );
});

export default memo(FilmScreen);
