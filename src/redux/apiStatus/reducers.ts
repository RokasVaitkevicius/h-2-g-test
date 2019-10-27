import { SET_API_STATUS, SET_API_ENDPOINT, SET_API_DATA } from './constants';
import { set } from '../utils';
import { APIStatus } from '../../types';
import { combineReducers } from 'redux';

const defaultApiStatusState = APIStatus.IDLE;
const defaultApiEndpointState = '';
const defaultApiDataState = null;

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
    default:
      return state;
  }
};

export default combineReducers({
  apiStatus,
  apiEndpoint,
  apiData,
});
