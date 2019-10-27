import { SET_IS_COLOR_CHECKED } from './constants';

export const setIsColorChecked = (id: number) => ({
  type: SET_IS_COLOR_CHECKED,
  payload: {
    id: id,
  },
});
