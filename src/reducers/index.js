import { combineReducers } from "redux";
import authReducer from './authReducer';
import productReducer from './productReducer';
import offerReducer from './offerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  offer: offerReducer,
});

export default rootReducer;