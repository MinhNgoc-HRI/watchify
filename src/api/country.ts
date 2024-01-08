import {APIs} from './config';
import {handleError} from './handleError';
import request from './request';
import {ApiResponse, Country} from './types';

export interface ListCountryRes {
  status: string;
  message: string;
  data: ListCountryData;
}

export interface ListCountryData {
  items: Country[];
}

export const getListCountry: () => Promise<
  ApiResponse<ListCountryRes>
> = async () => {
  try {
    const res = await request().get(APIs.COUNTRY);
    const {data} = res;
    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleError(error);
  }
};
