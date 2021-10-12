import React from 'react';
import { RegisterWrapper } from './RegisterSC';

const Register = () => {
  return (
    <>
      <RegisterWrapper>
        <div className="main-img">
          <img src="/group52.png" alt="main_img" />
        </div>
        <div className="register-container">
          <div>
            <img src="/group6607.svg" alt="second_img" />
          </div>
          <div className="form-container">
            <p>Üye Ol</p>
            <p>Fırsatlardan yararlanmak için üye ol!</p>
            <form>
              <label for="registerEmail">Email</label>
              <input type="email" id="registerEmail" placeholder="Email@example.com" />
              <label for="registerPassword">Şifre</label>
              <input type="password" id="registerPassword" placeholder="Password" />
              <button>Kayıt Ol</button>
            </form>
            <p>Hesabınız var mı? <a href="/#">Giriş Yap</a></p>
          </div>
        </div>
      </RegisterWrapper>
    </>
  )
}

export default Register;