import { createStore } from "redux";
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from "redux-logger";

// import rootReducer from '../reducers/rootReducer';
import { reducer } from "../reducers";

// const loggerMiddleware = createLogger();
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

const store = createStore(reducer);

export default store;