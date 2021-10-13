import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterWrapper } from './RegisterSC';

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let history = useHistory();

  const goLogin = () => {
    history.push("/login");
  }
  const goIndexPage = () => {
    history.push("/");
  }
  const registerBtn = e => {
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
              <label htmlFor="registerEmail">Email</label>
              <input type="email" id="registerEmail" placeholder="Email@example.com" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
              <label htmlFor="registerPassword">Şifre</label>
              <input type="password" id="registerPassword" placeholder="Password" value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
              <button onClick={registerBtn}>Kayıt Ol</button>
            </form>
            <p>Hesabınız var mı? <span onClick={goLogin}>Giriş Yap</span></p>
          </div>
        </div>
      </RegisterWrapper>
    </>
  )
}

export default Register;