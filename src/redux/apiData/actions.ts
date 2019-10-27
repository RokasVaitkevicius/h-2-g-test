import {
  SET_API_STATUS,
  SET_API_ENDPOINT,
  SET_API_DATA,
  SET_API_DATA_IS_CHECKED,
} from './constants';

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

export const setApiDataIsChecked = (id: string) => ({
  type: SET_API_DATA_IS_CHECKED,
  payload: {
    id: id,
  },
});
