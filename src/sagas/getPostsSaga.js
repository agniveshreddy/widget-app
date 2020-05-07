import { put, call } from 'redux-saga/effects';
import { types } from '../actions';
import { getPostsService } from '../services/getPostsService';

export function* getPostsSaga(payload) {
  console.log('came until here 1');
    try {
      const response = yield call(getPostsService, payload);
      yield put({ type: types.GET_POSTS_SUCESS, response });
    } 
    catch(error) {
      yield put({ type: types.GET_POSTS_ERROR, error })
    }
}