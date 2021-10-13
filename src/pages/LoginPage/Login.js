import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginWrapper } from './LoginSC';

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let history = useHistory();

  const goRegister = () => {
    history.push("/register");
  }
  const goIndexPage = () => {
    history.push("/");
  }

  const loginBtn = e => {
    e.preventDefault();
    if (userEmail.includes("@")) {
      // if: email and pass is correct --> routing home page
      if (8 < userPassword.length && userPassword.length < 20) {
        alert("register successful")
        goIndexPage();
      } else {  // else: give a alert
        alert("Hatalı Email veya Şifre")
      }
    } else {
      alert("Geçerli bir Eposta giriniz.")
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
            <p>Hesabınız yok mu? <a onClick={goRegister}>Kayıt Ol</a></p>
          </div>
        </div>
      </LoginWrapper>
    </>
  )
}

export default Login;