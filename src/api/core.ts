import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';

// import {APIs} from './config';

const {CancelToken} = axios;
const source = CancelToken.source();

/**
 * tạo ra 1 func request api dựa vào axios
 * @param baseUrl
 * @param timeout
 */
export const createRequest = (baseUrl: string, timeout: number) => {
  return (
    authToken?: string | undefined,
    cancelToken?: CancelTokenSource | undefined,
  ) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Accept-Language': store.getState().appInfoReducer.language,
    };
    // @ts-ignore
    // if (authToken) headers.Authorization = `Bearer ${authToken}`;

    const defaultOptions: AxiosRequestConfig = {
      headers,
      baseURL: baseUrl,
      timeout,
      cancelToken: cancelToken ? cancelToken.token : source.token,
    };

    return {
      /**
       * func get
       * override option request
       */
      get: <T = any, R = AxiosResponse<T>>(
        url: string,
        options: AxiosRequestConfig = {},
      ) => {
        return axios.get<T, R>(url, {
          // ...options.params,
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        });
      },
      /**
       * func post
       * override option request
       */
      post: <T = any, R = AxiosResponse<T>>(
        url: string,
        data?: any,
        options: AxiosRequestConfig = {},
      ) => {
        // console.log({ data })
        return axios.post<T, R>(url, data, {
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        });
      },
      /**
       * func put
       * override option request
       */
      put: <T = any, R = AxiosResponse<T>>(
        url: string,
        data?: any,
        options: AxiosRequestConfig = {},
      ) =>
        axios.put<T, R>(url, data, {
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        }),

      /**
       * func put
       * override option request
       */
      patch: <T = any, R = AxiosResponse<T>>(
        url: string,
        data?: any,
        options: AxiosRequestConfig = {},
      ) =>
        axios.patch<T, R>(url, data, {
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        }),

      /**
       * func delete
       * override option request
       */
      delete: <T = any, R = AxiosResponse<T>>(
        url: string,
        data?: any,
        options: AxiosRequestConfig = {},
      ) =>
        axios.delete<T, R>(url, {
          data: {
            ...data,
          },
          ...defaultOptions,
          ...options,
          headers: {
            ...defaultOptions.headers,
            ...options?.headers,
          },
        }),
    };
  };
};
