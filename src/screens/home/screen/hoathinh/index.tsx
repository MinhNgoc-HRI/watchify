import React, {forwardRef, memo, useState} from 'react';
import {HomeTopTabStackScreenProps} from '@src/navigation/types';
import {Box} from 'pmn-rn-component';
import {defaultColor} from '@src/utils/theme';
import Filter, {DEFAULT_FILTER} from '../components/Filter';
import ListFilm from '../components/ListFilm';

import {useControlList} from '../hook/useControlList';
import {APIs} from '@src/api/config';
import {Category, Country} from '@src/api/types';
export interface IHoatHinhScreen
  extends HomeTopTabStackScreenProps<'HOAT_HINH'> {}
export type OHoatHinhScreen = {};
const HoatHinhScreen = forwardRef<OHoatHinhScreen, IHoatHinhScreen>(
  (props, _ref) => {
    const {} = props;
    const {} = props;
    const [cate, setCate] = useState<Category | undefined>(DEFAULT_FILTER);
    const [coun, setCoun] = useState<Country | undefined>(DEFAULT_FILTER);
    const {films, onEndReachedHandle, loading} = useControlList(
      APIs.HOAT_HINH,
      1,
      cate?.slug,
      coun?.slug,
      true,
    );
    return (
      <Box flex={1} color={defaultColor.bg_primary}>
        <Filter
          selectCategory={cate}
          setSelectCategory={e => setCate(e)}
          selectCountry={coun}
          setSelectCountry={e => setCoun(e)}
        />
        <ListFilm
          films={films}
          onEndReachedHandle={onEndReachedHandle}
          loading={loading}
        />
      </Box>
    );
  },
);

export default memo(HoatHinhScreen);
