import { SET_POST } from './constants';

export const setPost = (post: string) => ({
  type: SET_POST,
  payload: post,
});
