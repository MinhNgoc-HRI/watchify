import {APIs} from './config';
import {handleError} from './handleError';
import request from './request';
import {ApiResponse, Category} from './types';

export interface ListCategoryRes {
  status: string;
  message: string;
  data: ListCategoryData;
}

export interface ListCategoryData {
  items: Category[];
}

export const getListCategory: () => Promise<
  ApiResponse<ListCategoryRes>
> = async () => {
  try {
    const res = await request().get(APIs.CATEGORY);
    const {data} = res;
    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleError(error);
  }
};
