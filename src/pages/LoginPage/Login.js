import React, { useState, useEffect } from 'react';

// redux
import { useDispatch } from 'react-redux';
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
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const dispatch = useDispatch();

  // const userToken = res => {
  //   dispatch({
  //     type: LOGIN_SUCCESS,
  //     action: {
  //       email: JSON.parse(res.config.data).email,
  //       token: res.data['access_token'],
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
    await axios.post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signin", {
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
      // dispatch(userToken(res))
      document.cookie = "token=" + res.data['access_token'];
      if (res.data['access_token']) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data['access_token']}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          email: JSON.parse(res.config.data).email,
          token: res.data['access_token'],
        }
      })
    }).catch(err => {
      setLoading(false);
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          email: "",
          token: "",
          error: err
        }
      })
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