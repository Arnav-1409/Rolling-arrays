import { fork } from "redux-saga/effects";
import { all } from 'redux-saga/effects';
import productListSaga from './productListSaga'

export default function* rootSaga() {
  yield all([
    fork(productListSaga),
  ]);
}