import authService from "../services/authService";
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions/actionTypes'

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const loginError = user => {
  return {
    type: LOGIN_ERROR,
    payload: user
  }
}

export const logout = () => {
  authService.logout();
  return {
    type: LOGOUT
  };
};

// export const login = (email, password) => {
//   return dispatch => {
//     authService.login(email, password)
//       .then(data => {
//         console.log(data)
//         // data.message ? dispatch(loginError(data.message)) : (dispatch(loginSuccess(data)))
//       })
//       .catch(err => dispatch(loginError(err)));
//   };
// };

