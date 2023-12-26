import React, {forwardRef, memo} from 'react';
import {HomeTopTabStackScreenProps} from '@src/navigation/types';
import {Box} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import Filter from './components/Filter';
import ListFilm from './components/ListFilm';
export interface IFilmScreen extends HomeTopTabStackScreenProps<'FILM_SCEEN'> {}
export type OFilmScreen = {};
const FilmScreen = forwardRef<OFilmScreen, IFilmScreen>((props, _ref) => {
  const {} = props;

  return (
    <Box flex={1} color={defaultColor.bg_primary}>
      <Filter />
      <ListFilm />
    </Box>
  );
});

export default memo(FilmScreen);
