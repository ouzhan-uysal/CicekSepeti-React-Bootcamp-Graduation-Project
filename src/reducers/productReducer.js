import { ADD_PRODUCT, DELETE_PRODUCT } from '../actions/actionTypes';

const INITIAL_STATE = {
  products: []
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] }
    case DELETE_PRODUCT:
      return { ...state }
    default:
      return { ...state }
  }
}

export default productReducer;