import {types}  from '../actions';

export default function(state = [], action) {
  const { response } = action;
  console.log('action type: '+ action.type);
  switch(action.type) {
    case types.GET_POSTS_SUCESS:
      return [...state, ...response] ;
    case types.GET_POSTS_ERROR:
      return { ...state, ...response };
    case types.RESET_POSTS:
      return [];
    default:
      return state;
  }
};