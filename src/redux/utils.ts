import { ActionTypes } from '../types';

const set = (state: any, { payload }: any) => payload;

const addItemToArray = (state: any, { payload }: any) => [...state, payload];

function apiAction({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = (data: Array<object>) => {},
  onFailure = () => {},
}) {
  return {
    type: ActionTypes.API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
    },
  };
}

export { set, apiAction, addItemToArray };
