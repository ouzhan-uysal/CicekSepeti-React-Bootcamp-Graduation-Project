import axios from 'axios';
import Cookies from 'js-cookie';

// import { setAuthorizationToken } from '../helpers/setAuthorizationToken';

export const login = async (email, password) => {
  return await axios.post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signin", {
    email, password
  })
    .then(res => {
      // if user found
      console.log("Res", res)
      if (res.data) {
        const { email, token } = res.data;
        Cookies.get('auth_token');
        // setAuthorizationToken(token);
      }
      return res.data;
    })
    .catch(err => console.log(err));
}

export const logout = () => {
  document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // history.push('/login')
  // setAuthorizationToken(false);
}