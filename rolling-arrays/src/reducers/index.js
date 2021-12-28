import { combineReducers } from 'redux';
import appReducer from './appReducer';
import productListReducer from './productListReducer';

export default combineReducers({
  app: appReducer, productList : productListReducer,
})