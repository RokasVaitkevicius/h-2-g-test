import { Post } from '../types';

export default async (): Promise<Array<Post>> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      return res.json();
    })
    .catch(e => console.log(e));
  return result;
};
