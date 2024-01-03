import {APIs} from './config';
import {handleError} from './handleError';
import request from './request';
import {ApiResponse} from './types';

export interface OCategory {
  status: string;
  message: string;
  data: DataCategory;
}

export interface DataCategory {
  items: Category[];
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export const getCategory: () => Promise<ApiResponse<OCategory>> = async () => {
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
