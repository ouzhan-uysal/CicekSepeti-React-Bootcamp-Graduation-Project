import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actions/actionTypes";
import axios from "axios";

const INITIAL_STATE = {
  email: '',
  token: '',
  isAuthenticated: false,
  error: false,
  errorMessage: '',
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("State: ", state)
      console.log("Action: ", action)
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        isAuthenticated: true,
        error: false,
        errorMessage: ''
      };
    case LOGIN_ERROR:
      return {
        ...state,
        email: '',
        token: '',
        error: true,
        isAuthenticated: false,
        errorMessage: action.error
      };
    case LOGOUT:
      return {
        email: '',
        token: ''
      };
    default:
      return { ...state };
  }
}

export default authReducer;