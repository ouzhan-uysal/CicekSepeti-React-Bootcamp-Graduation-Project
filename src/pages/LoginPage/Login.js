import React from 'react';
import { LoginWrapper } from './LoginSC';

const Login = () => {
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
              <label for="registerEmail">Email</label>
              <input type="email" id="registerEmail" placeholder="Email@example.com" />
              <label for="registerPassword">Şifre</label>
              <input type="password" id="registerPassword" placeholder="Password" />
              <button>Giriş Yap</button>
            </form>
            <p>Hesabınız yok mu? <a href="/#">Kayıt Ol</a></p>
          </div>
        </div>
      </LoginWrapper>
    </>
  )
}

export default Login;