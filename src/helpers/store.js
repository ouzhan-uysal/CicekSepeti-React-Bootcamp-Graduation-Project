import { createStore } from "redux";
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from "redux-logger";

// import rootReducer from "../reducers/rootReducer";
import productReducer from '../reducers/productReducer';

// const loggerMiddleware = createLogger();
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

const store = createStore(productReducer);

export default store;