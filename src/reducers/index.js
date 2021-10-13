import { ADD_PRODUCT, DELETE_PRODUCT } from '../actions/actionTypes';
// import { products } from '../services/getProduct';

const INITIAL_STATE = {
  products: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  // console.log("State: ", state);
  // console.log("Action: ", action);
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] }
    case DELETE_PRODUCT:
      return { ...state }
    default:
      return { ...state }
  }
}