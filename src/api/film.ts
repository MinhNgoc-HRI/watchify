import {APIs} from './config';
import {handleError} from './handleError';
import request from './request';
import {ApiResponse, FilmRes, DetailFilmRes} from './types';

export const getHome: (
  page: 1,
) => Promise<ApiResponse<FilmRes>> = async page => {
  try {
    const res = await request().get(`${APIs.LIST_FILM}?page=${page}`);
    const {data} = res;
    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getListFilm: (params: {
  page?: number;
  category?: string;
  country?: string;
  prefixUrl: string;
}) => Promise<ApiResponse<FilmRes>> = async params => {
  const {prefixUrl, page, category, country} = params;
  const pageParam = page ? `page=${page}&` : '';
  const categoryParam = category ? `category=${category}&` : '';
  const countryParam = country ? `country=${country}&` : '';
  try {
    const res = await request().get(
      `${prefixUrl}?${pageParam}${categoryParam}${countryParam}`,
    );
    const {data} = res;
    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleError(error);
  }
};
export const getDetailFilm: (
  slug: string,
) => Promise<ApiResponse<DetailFilmRes>> = async slug => {
  try {
    const url = APIs.DETAIL + '/' + slug;
    const res = await request().get(url);
    const {data} = res;
    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getSearchFilm: (
  text: string,
) => Promise<ApiResponse<FilmRes>> = async text => {
  try {
    const url = APIs.SEARCH + '?keyword=' + text;
    const res = await request().get(url);
    const {data} = res;
    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleError(error);
  }
};
