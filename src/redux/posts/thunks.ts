import postsApi from '../../api/posts';

import { setPost } from './actions';

const fetchAndSetPostThunk = () => async dispatch => {
  const posts = await postsApi();
  const randomPost = posts[Math.floor(Math.random() * posts.length)].body;
  dispatch(setPost(randomPost));
};

export { fetchAndSetPostThunk };
