import { SET_PRODUCT_OFFER, CANCEL_PRODUCT_OFFER, SET_OFFERED_PRODUCT_ID } from "../actions/actionTypes";

const INITIAL_STATE = {
  product: "",
  productID: "",
  price: 0,
  offerPrice: 0,
  offerID: ""
}

const offerReducer = (state = INITIAL_STATE, action) => {
  // console.log("action: ", action)
  switch (action.type) {
    case SET_PRODUCT_OFFER:
      return { state: action.payload }
    case CANCEL_PRODUCT_OFFER:
      return { ...state, state }
    case SET_OFFERED_PRODUCT_ID:
      return { ...state, offerID: action.payload }
    default:
      return { ...state }
  }
}

export default offerReducer;