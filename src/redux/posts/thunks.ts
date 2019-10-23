import { ActionTypes, Post } from '../../types';
import { setPost } from './actions';

const fetchAndSetPost = () => {
  return apiAction({
    url: 'https://jsonplaceholder.typicode.com/posts',
    onSuccess: (posts: Array<Post>) => {
      const randomPost = posts[Math.floor(Math.random() * posts.length)].body;
      return setPost(randomPost);
    },
    onFailure: () => console.log('Error occured loading posts'),
  });
};

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

export { fetchAndSetPost };
