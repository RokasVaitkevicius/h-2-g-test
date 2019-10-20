import { SET_POST } from './constants';
import { set } from '../utils';

const defaultPostState = '';

export default (state = defaultPostState, action) => {
  switch (action.type) {
    case SET_POST:
      return set(state, action);
    default:
      return state;
  }
};
