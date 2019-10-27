import {
  SET_API_STATUS,
  SET_API_ENDPOINT,
  SET_API_DATA,
  SET_API_DATA_IS_CHECKED,
} from './constants';
import { APIStatus } from '../../types';

export const setApiStatus = (status: APIStatus) => ({
  type: SET_API_STATUS,
  payload: status,
});

export const setApiEndpoint = (endpoint: string) => ({
  type: SET_API_ENDPOINT,
  payload: endpoint,
});

export const setApiData = (data: Array<object>) => ({
  type: SET_API_DATA,
  payload: data,
});

export const setApiDataIsChecked = (id: number) => ({
  type: SET_API_DATA_IS_CHECKED,
  payload: {
    id,
  },
});
