import axios from 'axios';

// import { setAuthorizationToken } from '../helpers/setAuthorizationToken';

export const login = async (email, password) => {
  return await axios.post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signin", {
    email, password
  })
    .then(res => {
      // if user found
      console.log("Res", res)
      if (res.data) {
        // const { email, token } = res.data;
        // setAuthorizationToken(token);
      }
      return res.data;
    })
    .catch(err => console.log(err));
}

export const logout = () => {
  // history.push('/login')
  // setAuthorizationToken(false);
}