import axios from 'axios';

import { setAutorizationToken } from '../helpers/setAuthorizationToken';

const login = (username, password) => {
  return axios.post("http://localhost:3000/account/login", { username, password })
    .then(user => {
      // if user found
      if (user.data.status) {
        const { token } = user.data;
        localStorage.setItem("jwtToken", token);
        setAutorizationToken(token);
      }
      return user.data;
    })
    .catch(err => console.log(err));
}

const logout = () => {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(false);
}

export default { login, logout };