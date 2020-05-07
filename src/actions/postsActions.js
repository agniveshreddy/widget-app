import { types } from './index';

export const getPosts = (token) => {
    return {
      type: types.GET_POSTS,
      token
    }
};
export const resetPosts = ()=>{
  return {
    type: types.RESET_POSTS,
    token: '',
  }
}