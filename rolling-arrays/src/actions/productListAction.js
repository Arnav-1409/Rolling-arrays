import ACTIONS from '../constants/actions';

export const sendProductListRequest = (data) => {
  return {
    type: ACTIONS.SEND_PRODUCT_LIST_REQUEST,
    payload: data
  };
}

export const fetchProductListSuccess = (data) => {
  return {
    type: ACTIONS.FETCH_PRODUCT_LIST_SUCCESS,
    payload: data
  }
}

export const fetchProductListError = (error) => {
  return {
    type: ACTIONS.FETCH_PRODUCT_LIST_ERROR,
    payload: error
  }
}

export const clearAllNotifications = () => {
  return {
    type: ACTIONS.CLEAR_ALL_NOTIFICATIONS,
    payload: undefined
  }
}