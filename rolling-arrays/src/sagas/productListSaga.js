import ACTIONS from '../constants/actions';
import { take, call, put, select, all } from 'redux-saga/effects';
import { productListAction } from './../actions';
import axios from 'axios';

function productListDetails(API_URL) {
  let GET_LIST_URL = API_URL + 'products';
  return axios({
    url: GET_LIST_URL,
    method: 'GET',
    data: {},
    headers: {
      "Content-type": "application/json",
    },
  })
    .catch(err => {
      console.log(err);
    });
}

function limitProductListDetails(API_URL, limitValue) {
  let GET_LIST_URL = API_URL + `products?limit=${limitValue}`;
  return axios({
    url: GET_LIST_URL,
    method: 'GET',
    data: {},
    headers: {
      "Content-type": "application/json",
    },
  })
    .catch(err => {
      console.log(err);
    });
}

export default function* getProductList() {
  while (true) {
    const action = yield take(ACTIONS.SEND_PRODUCT_LIST_REQUEST);
    try {
      const API_URL = yield select((state) => state.app.API_URL);
      console.log(action.payload)

      const [response] = (action && action.payload) ? yield all([call(limitProductListDetails, API_URL, action.payload)]) : yield all([call(productListDetails, API_URL, action.payload)]);
      console.log(response)
      const item = response && response.data;
      if (item) {
        yield put(productListAction.fetchProductListSuccess(item));
      } else {
        let data = [{
          'message': 'Error occured',
          'error': 'error',
        }];
        yield put(productListAction.fetchProductListError(data));
      }
    }
    catch (e) {
      let data = [{
        'message': 'Server Error',
        'error': 'error',
      }];
      yield put(productListAction.fetchProductListError(data))
    }
  }
}
