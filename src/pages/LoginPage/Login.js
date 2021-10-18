import React, { useState, useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions/actionTypes';

// third part
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

// style
import { LoginWrapper } from './LoginSC';

// popup
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const auth = useSelector(state => state.auth);
  // console.log(auth)
  const dispatch = useDispatch();
  // const userToken = () => {
  //   dispatch({
  //     type: LOGIN_SUCCESS,
  //     action: {

  //     }
  //   })
  // }

  // if already login --> routing index page
  useEffect(() => {
    Cookies.get('token') && history.push("/")
  }, [history, loading])

  const loginBtn = async e => {
    e.preventDefault();
    setLoading(true);
    await axios.post("http://bootcampapi.techcs.io/api/fe/v1/authorization/signin", {
      email: userEmail,
      password: userPassword
    }).then(res => {
      setLoading(false);
      console.log("Response: ", res)
      toast.success('Wow so easy!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // dispatch({
      //   email: JSON.parse(res.config.data).email,
      //   token: res.data['access_token'],
      // })
      // document.cookie = "token=" + res.data['access_token'];
    }).catch(err => {
      setLoading(false);
      setError(err);
      console.log(error);
    });
  }

  return (
    <>
      <LoginWrapper>
        <div className="main-img">
          <img src="/group52.png" alt="main_img" />
        </div>
        <div className="login-container">
          <div>
            <img src="/group6607.svg" alt="second_img" />
          </div>
          <div className="form-container">
            <p>Giriş Yap</p>
            <p>Fırsatlardan yararlanmak için giriş yap!</p>
            <form>
              <label htmlFor="loginEmail">Email</label>
              <input type="email" id="loginEmail" placeholder="Email@example.com" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
              <label htmlFor="loginPassword">Şifre</label>
              <input type="password" id="loginPassword" placeholder="Password" value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
              <button type="click" onClick={loginBtn}>Giriş Yap</button>
            </form>
            <p>Hesabınız yok mu? <span onClick={() => history.push("/register")}>Kayıt Ol</span></p>
          </div>
        </div>
      </LoginWrapper>
      <ToastContainer />
    </>
  )
}

export default Login;