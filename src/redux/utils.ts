import { ActionTypes } from '../types';

const updateObjectInArray = (array, { payload }) => {
  return array.map(item => {
    if (item.id === payload.id) {
      return {
        ...item,
        ...payload,
      };
    }

    return item;
  });
};

const update = (state, { payload }) => ({ ...state, ...payload });

const set = (state, { payload }) => payload;

const updateValueByKey = (state, key, { payload }) => ({
  ...state,
  [key]: payload,
});

function apiAction({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = () => {},
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

export { updateObjectInArray, update, set, updateValueByKey, apiAction };
