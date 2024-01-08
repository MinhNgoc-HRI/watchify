import {Film} from '@src/api/types';
import {useCallback, useEffect, useState} from 'react';
import {getListFilm} from '@src/api/film';

export const useControlList = (
  prefixUrl: string,
  initPage = 1,
  category?: string,
  country?: string,
  loadMore = true,
) => {
  const [films, setFilms] = useState<Film[] | undefined>();
  const [page, setPage] = useState<number>(initPage);
  const [loading, setLoading] = useState<boolean>(false);
  const callApi = useCallback(async () => {
    setLoading(true);
    try {
      const rs = await getListFilm({
        page: page,
        category: category,
        country: country,
        prefixUrl: prefixUrl,
      });
      if (rs?.data?.data?.items) {
        setFilms(v => (v || []).concat(rs.data.data.items));
        setPage(v => v + 1);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }, [category, country, page, prefixUrl]);
  const onEndReachedHandle = useCallback(() => {
    if (!loadMore && page > 1) {
      return;
    }
    if (loading) {
      return;
    } else {
      callApi();
    }
  }, [callApi, loadMore, loading, page]);
  useEffect(() => {
    setPage(initPage);
    setFilms([]);
    setLoading(false);
  }, [category, initPage, country]);
  return {
    onEndReachedHandle: onEndReachedHandle,
    loading,
    films,
  };
};
