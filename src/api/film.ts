import {APIs} from './config';
import {handleError} from './handleError';
import request from './request';
import {ApiResponse} from './types';
export interface IGetListFilm {
  page: number;
}
export interface OGetListFilm {
  status: boolean;
  items: OFilm[];
  pathImage: string;
  pagination: Pagination;
}

export interface OFilm {
  modified: Modified;
  _id: string;
  name: string;
  origin_name: string;
  thumb_url: string;
  poster_url: string;
  slug: string;
  year: number;
}

export interface Modified {
  time: string;
}

export interface Pagination {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  totalPages: number;
}

export const getListFilm: (
  params: IGetListFilm,
) => Promise<ApiResponse<OGetListFilm>> = async params => {
  try {
    const res = await request().get(`${APIs.LIST_FILM}?page=${params.page}`);
    const {data} = res;
    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleError(error);
  }
};
