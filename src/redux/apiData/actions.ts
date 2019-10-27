import { SET_API_STATUS, SET_API_ENDPOINT, SET_API_DATA } from './constants';

export const setApiStatus = status => ({
  type: SET_API_STATUS,
  payload: status,
});

export const setApiEndpoint = endpoint => ({
  type: SET_API_ENDPOINT,
  payload: endpoint,
});

export const setApiData = data => ({
  type: SET_API_DATA,
  payload: data,
});
