import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { LoginWrapper } from './LoginSC';

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  // if already login --> routing index page
  useEffect(() => {
    Cookies.get('token') && history.push("/home")
    // localStorage.getItem('user-info') && history.push("/home")
  }, [loading])

  const loginBtn = async e => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    await axios.post("http://bootcampapi.techcs.io/api/fe/v1/authorization/signin", {
      email: userEmail,
      password: userPassword
    }).then(response => {
      setLoading(false);
      // console.log("Response: ", response)
      document.cookie = "token=" + response.data['access_token'];
    }).catch(error => {
      setLoading(false);
      if(error.response.status === 401 || error.response.status === 400) {
        setError(error.response.data.message)
      } else {
        setError("Something went wrong. Please try again later.");
      }
    });
    // console.log("Response: ", response)
    // if (response.status === 200) {
    //   localStorage.setItem("user-info", JSON.stringify(response));
    //   history.push("/home");
    // } else {
    //   alert("Erişim Reddi.");
    // }
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
    </>
  )
}

export default Login;