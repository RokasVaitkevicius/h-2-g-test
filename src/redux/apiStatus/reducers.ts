import { SET_API_STATUS } from './constants';
import { set } from '../utils';
import { APIStatus } from '../../types';

const defaultApiStatusState = APIStatus.IDLE;

export default (state = defaultApiStatusState, action) => {
  switch (action.type) {
    case SET_API_STATUS:
      return set(state, action);
    default:
      return state;
  }
};
