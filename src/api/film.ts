import {APIs} from './config';
import {handleError} from './handleError';
import request from './request';
import {ApiResponse} from './types';
import {Root} from '@src/api/types';
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
export interface IGetFilms {
  page?: number;
  category?: string;
  country?: string;
  prefixUrl: string;
}
export const getFilms: (
  params: IGetFilms,
) => Promise<ApiResponse<Root>> = async params => {
  const {prefixUrl, page, category, country} = params;
  const pageParam = page ? `page=${page}` : '';
  const categoryParam = category ? `category=${category}` : '';
  const countryParam = country ? `country=${country}` : '';
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
) => Promise<ApiResponse<DetailFilm>> = async slug => {
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

export interface DetailFilm {
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  seoOnPage: SeoOnPage;
  breadCrumb: BreadCrumb[];
  params: Params;
  item: Item;
}

export interface SeoOnPage {
  og_type: string;
  titleHead: string;
  seoSchema: SeoSchema;
  descriptionHead: string;
  og_image: string[];
  updated_time: number;
  og_url: string;
}

export interface SeoSchema {
  '@context': string;
  '@type': string;
  name: string;
  dateModified: string;
  dateCreated: string;
  url: string;
  datePublished: string;
  image: string;
  director: string;
}

export interface BreadCrumb {
  name: string;
  slug?: string;
  position: number;
  isCurrent?: boolean;
}

export interface Params {
  slug: string;
}

export interface Item {
  created: Created;
  modified: Modified;
  _id: string;
  name: string;
  origin_name: string;
  content: string;
  type: string;
  status: string;
  thumb_url: string;
  poster_url: string;
  is_copyright: boolean;
  sub_docquyen: boolean;
  chieurap: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  notify: string;
  showtimes: string;
  slug: string;
  year: number;
  view: number;
  actor: string[];
  director: string[];
  category: Category[];
  country: Country[];
  episodes: Episode[];
}

export interface Created {
  time: string;
}

export interface Modified {
  time: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
}

export interface Episode {
  server_name: string;
  server_data: ServerDaum[];
}

export interface ServerDaum {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}
