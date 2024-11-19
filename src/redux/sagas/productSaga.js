import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProducts() {
  try {
    const response = yield call(axios.get,'https://fakestoreapi.com/products');
    yield put({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_PRODUCTS_FAILURE', error: error.message });
  }
}

export default function* watchProductsSaga() {
  yield takeEvery('FETCH_PRODUCTS_REQUEST', fetchProducts);
}
