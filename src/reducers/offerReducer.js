import { SET_PRODUCT_OFFER, CANCEL_PRODUCT_OFFER } from "../actions/actionTypes";

const INITIAL_STATE = {
  product: "",
  productID: "",
  price: 0,
  offer_price: 0,
}

const offerReducer = (state = INITIAL_STATE, action) => {
  // console.log("action: ", action)
  switch (action.type) {
    case SET_PRODUCT_OFFER:
      return { state: action.payload }
    case CANCEL_PRODUCT_OFFER:
      return { ...state, state }
    default:
      return { ...state }
  }
}

export default offerReducer;