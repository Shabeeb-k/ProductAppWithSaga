import { all } from 'redux-saga/effects';
import watchProductsSaga from './productSaga';

export default function* rootSaga() {
  yield all([watchProductsSaga()]);
}
