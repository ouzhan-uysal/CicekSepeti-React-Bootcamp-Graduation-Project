import { OFFER_PRODUCT } from "../actions/actionTypes";

const INITIAL_STATE = {
  product: "",
  productID: "",
  price: "",
  offer_price: "",
}

const offerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OFFER_PRODUCT:
      return { ...state }
    default:
      return { ...state }
  }
}

export default offerReducer;