import { ActionTypes } from '../types';

const set = (state: any, { payload }: any) => payload;

const addItemToArray = (state: any, { payload }: any) => [...state, payload];

const apiAction = ({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = (data: Array<object>) => {},
  onFailure = () => {},
}) => ({
  type: ActionTypes.API,
  payload: {
    url,
    method,
    data,
    onSuccess,
    onFailure,
  },
});

export { set, apiAction, addItemToArray };
