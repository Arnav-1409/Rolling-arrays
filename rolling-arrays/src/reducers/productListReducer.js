import ACTIONS from './../constants/actions';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SEND_PRODUCT_LIST_REQUEST:
      state = action.payload
      return { ...state, productListErrMsg: false, productListSuccessMsg: false, isProductListFetching: true }

    case ACTIONS.FETCH_PRODUCT_LIST_ERROR:
      return { ...state, productListErrMsg: action.payload, isProductListFetching: false, productListSuccessMsg: false };

    case ACTIONS.FETCH_PRODUCT_LIST_SUCCESS:
      return { ...state, productListData: action.payload, productListSuccessMsg: true, productListErrMsg: undefined, isProductListFetching: false };

    case ACTIONS.CLEAR_ALL_NOTIFICATIONS:
      return { ...state, productListData: undefined, productListSuccessMsg: undefined, productListErrMsg: undefined, isProductListFetching: false };  

    default:
      return { ...state };

  }

}
