import { SET_API_STATUS } from './constants';

export const setApiStatus = status => ({
  type: SET_API_STATUS,
  payload: status,
});
