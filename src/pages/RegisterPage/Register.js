import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { RegisterWrapper } from './RegisterSC';

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let history = useHistory();

  // if already login --> routing index page
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/home")
    }
  }, [])

  const registerBtn = async e => {
    e.preventDefault();
    if (userEmail.includes("@")) {
      // if: email and pass is correct --> routing home page
      if (8 < userPassword.length && userPassword.length < 20) {
        e.preventDefault();
        const response = await axios.get("http://bootcampapi.techcs.io/api/fe/v1/authorization/signup", {
          method: 'POST',
          headers: {
            "access-control-allow-origin": "*",
            "content-type": "application/json; charset=utf-8",
            "etag": "85-lGOXsaD09ymuXCUTFYyhvjG54pQ",
            "server": "istio-envoy",
            "x-envoy-upstream-service-time": 2,
            "x-powered-by": "Express",
          },
          body: JSON.stringify({ email: userEmail, password: userPassword })
        });
        if (response.status === 201 || response.status === 200) {
          localStorage.setItem("user-info", JSON.stringify(response));
          history.push("/home")
        } else {
          alert("Erişim Reddi.")
        }
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
            <p>Hesabınız var mı? <span onClick={() => history.push("/login")}>Giriş Yap</span></p>
          </div>
        </div>
      </RegisterWrapper>
    </>
  )
}

export default Register;