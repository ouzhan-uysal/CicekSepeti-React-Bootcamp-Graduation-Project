import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginWrapper } from './LoginSC';

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let history = useHistory();

  // if already login --> routing index page
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/home")
    }
  }, [])

  const goRegister = () => {
    history.push("/register");
  }

  const loginBtn = async e => {
    e.preventDefault();
    let result = await fetch("http://bootcampapi.techcs.io/api/fe/v1/authorization/signin", {
      method: 'POST',
      headers: {
        "access-control-allow-origin": "*",
        "content-length": "43",
        "content-type": "application/json; charset=utf-8",
        "date": "Wed,13 Oct 2021 17:41:52 GMT",
        "etag": "2b-hGShxOkieaAVDloBubJVM+h58D8",
        "server": "istio - envoy",
        "x-envoy-upstream-service-time": "89",
        "x-powered-by": "Express",
      },
      body: JSON.stringify({ email: userEmail, password: userPassword })
    });
    if (result.status === 201) {
      console.log(result)
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      history.push("/home")
    } else {
      alert("Erişim Reddi.")
    }
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
            <p>Hesabınız yok mu? <span onClick={goRegister}>Kayıt Ol</span></p>
          </div>
        </div>
      </LoginWrapper>
    </>
  )
}

export default Login;