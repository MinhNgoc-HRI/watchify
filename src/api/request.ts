import {createRequest} from './core';
import {baseUrl, timeout} from './config';

const request = createRequest(baseUrl, timeout);
export default request;
