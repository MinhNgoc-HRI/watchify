export interface FilmRes {
  status: string;
  message: string;
  data: FilmData;
}

export interface FilmData {
  seoOnPage: FilmSeoOnPage;
  breadCrumb: FilmBreadCrumb[];
  titlePage: string;
  items: Film[];
  params: FilmParams;
  type_list: string;
  APP_DOMAIN_FRONTEND: string;
  APP_DOMAIN_CDN_IMAGE: string;
}

export interface FilmSeoOnPage {
  og_type: string;
  titleHead: string;
  descriptionHead: string;
  og_image: string[];
  og_url: string;
}

export interface FilmBreadCrumb {
  name: string;
  slug?: string;
  isCurrent: boolean;
  position: number;
}

export interface Film {
  modified: Modified;
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  type: string;
  thumb_url: string;
  poster_url: string;
  sub_docquyen: boolean;
  chieurap: boolean;
  time: string;
  episode_current: string;
  quality: string;
  lang: string;
  year: number;
  category: Category[];
  country: Country[];
}

export interface Modified {
  time: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  _id: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
  _id: string;
}

export interface FilmParams {
  type_slug: string;
  filterCategory: string[];
  filterCountry: string[];
  filterYear: string;
  filterType: string;
  sortField: string;
  sortType: string;
  pagination: Pagination;
}

export interface Pagination {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  pageRanges: number;
}

export interface ApiResponse<T> {
  success?: boolean;
  data: T;
  code?: number;
}

export interface DetailFilmRes {
  status: string;
  message: string;
  data: DetailFilmData;
}

export interface DetailFilmData {
  seoOnPage: DetailFilmSeoOnPage;
  breadCrumb: DetailFilmBreadCrumb[];
  params: DetailFilmParams;
  item: DetailFilm;
}

export interface DetailFilmSeoOnPage {
  og_type: string;
  titleHead: string;
  seoSchema: DetailFilmSeoSchema;
  descriptionHead: string;
  og_image: string[];
  updated_time: number;
  og_url: string;
}

export interface DetailFilmSeoSchema {
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

export interface DetailFilmBreadCrumb {
  name: string;
  slug?: string;
  position: number;
  isCurrent?: boolean;
}

export interface DetailFilmParams {
  slug: string;
}

export interface DetailFilm {
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
  episodes: DetailFilmEpisode[];
}

export interface Created {
  time: string;
}

export interface DetailFilmEpisode {
  server_name: string;
  server_data: DetailFilmServerDaum[];
}

export interface DetailFilmServerDaum {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}
