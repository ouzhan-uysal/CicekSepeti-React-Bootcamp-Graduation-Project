import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { RegisterWrapper } from './RegisterSC';

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  // if already login --> routing index page
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/home")
    }
  }, [])
  /*
  deneme@gmail.com  123123123
   */
  const registerBtn = async e => {
    e.preventDefault();
    if (userEmail.includes("@")) {
      // if: email and pass is correct --> routing home page
      if (8 < userPassword.length && userPassword.length < 20) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        console.log("email: ", userEmail);
        console.log("pass: ", userPassword);
        await axios.post("http://bootcampapi.techcs.io/api/fe/v1/authorization/signup", {
          email: userEmail,
          password: userPassword
        }).then(response => {
          setLoading(false);
          console.log("Response: ", response)
          // document.cookie = "token=" + response.data;
          // console.log("Token: ", document.cookie)
        }).catch(error => {
          setLoading(false);
          if (error.response.status === 401 || error.response.status === 400) {
            setError(error.response.data.message)
          } else if (error.response.status === 409) {
            setError("This email is already used.");
          } else {
            setError("Something went wrong. Please try again later.");
          }
        });
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