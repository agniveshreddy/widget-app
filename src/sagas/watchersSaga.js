import { takeEvery } from 'redux-saga/effects';

import { types } from '../actions';
import { getPostsSaga } from './getPostsSaga';


export default function* watchUserAuthentication() {
  yield takeEvery(types.GET_POSTS, getPostsSaga);
}