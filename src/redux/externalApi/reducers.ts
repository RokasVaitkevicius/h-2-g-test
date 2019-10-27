import { combineReducers } from 'redux';
import {
  SET_API_STATUS,
  SET_API_ENDPOINT,
  SET_API_DATA,
  SET_API_DATA_IS_CHECKED,
} from './constants';
import { set } from '../utils';
import { APIStatus, Action } from '../../types';

const defaultApiStatusState = APIStatus.IDLE;
const defaultApiEndpointState = '';
const defaultApiDataState: Array<object> = [];

const updateApiDataCheckedInArray = (
  array: Array<object>,
  { payload }: Action
) => {
  return array.map(item => {
    // @ts-ignore
    if (item.id === payload.id) {
      return {
        ...item,
        // @ts-ignore
        isChecked: !item.isChecked,
      };
    }

    return item;
  });
};

const status = (state = defaultApiStatusState, action: Action) => {
  switch (action.type) {
    case SET_API_STATUS:
      return set(state, action);
    default:
      return state;
  }
};

const endpoint = (state = defaultApiEndpointState, action: Action) => {
  switch (action.type) {
    case SET_API_ENDPOINT:
      return set(state, action);
    default:
      return state;
  }
};

const data = (state = defaultApiDataState, action: Action) => {
  switch (action.type) {
    case SET_API_DATA:
      return set(state, action);
    case SET_API_DATA_IS_CHECKED:
      return updateApiDataCheckedInArray(state, action);
    default:
      return state;
  }
};

export default combineReducers({
  status,
  endpoint,
  data,
});
