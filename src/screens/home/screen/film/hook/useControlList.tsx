import {OFilm} from '@src/api/types';
import {useCallback, useEffect, useState} from 'react';
import {getFilms} from '@src/api/film';

export const useControlList = (
  prefixUrl: string,
  initPage = 1,
  category?: string,
  country?: string,
  loadMore = true,
) => {
  const [films, setFilms] = useState<OFilm[] | undefined>();
  const [page, setPage] = useState<number>(initPage);
  const [loading, setLoading] = useState<boolean>(false);
  const callApi = useCallback(() => {
    setLoading(true);
    getFilms({
      page: page,
      category: category,
      country: country,
      prefixUrl: prefixUrl,
    })
      .then(e => {
        if (e?.data?.data?.items) {
          const {items} = e?.data?.data;
          setFilms(v => [...(v || []), ...items]);
          setLoading(false);
          setPage(v => v + 1);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, [category, country, page, prefixUrl]);
  const onEndReachedHandle = useCallback(() => {
    if (!loadMore) {
      return;
    }
    if (loading) {
      return;
    } else {
      callApi();
    }
  }, [callApi, loadMore, loading]);
  useEffect(() => {
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    onEndReachedHandle: onEndReachedHandle,
    loading,
    films,
  };
};
