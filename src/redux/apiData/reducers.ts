import {
  SET_API_STATUS,
  SET_API_ENDPOINT,
  SET_API_DATA,
  SET_API_DATA_IS_CHECKED,
} from './constants';
import { set } from '../utils';
import { APIStatus } from '../../types';
import { combineReducers } from 'redux';

const defaultApiStatusState = APIStatus.IDLE;
const defaultApiEndpointState = '';
const defaultApiDataState = [];

const updateApiDataCheckedInArray = (array, { payload }) => {
  return array.map(item => {
    if (item.id === payload.id) {
      return {
        ...item,
        isChecked: !item.isChecked,
      };
    }

    return item;
  });
};

const apiStatus = (state = defaultApiStatusState, action) => {
  switch (action.type) {
    case SET_API_STATUS:
      return set(state, action);
    default:
      return state;
  }
};

const apiEndpoint = (state = defaultApiEndpointState, action) => {
  switch (action.type) {
    case SET_API_ENDPOINT:
      return set(state, action);
    default:
      return state;
  }
};

const apiData = (state = defaultApiDataState, action) => {
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
  apiStatus,
  apiEndpoint,
  apiData,
});
