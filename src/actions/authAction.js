import authService from "../services/authService";
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions/actionTypes'

const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = error => {
  return {
    type: LOGIN_ERROR,
    error
  };
};

export const login = (username, password) => {
  return dispatch => {
    authService.login(username, password)
      .then(data => {
        data.message ? dispatch(loginError(data.message)) : (dispatch(loginSuccess(data)))
      })
      .catch(err => dispatch(loginError(err)));
  }
}

export const logout = () => {
  authService.logout();
  return {
    type: LOGOUT
  };
}