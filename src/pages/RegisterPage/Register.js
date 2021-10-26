import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { regex } from '../../contants';
import { RegisterWrapper } from './RegisterSC';

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  // if already login --> routing index page
  useEffect(() => {
    localStorage.getItem("email") && history.push("/login")
  }, [history, isLoading])

  const registerBtn = async e => {
    e.preventDefault();
    if (regex.test(userEmail)) {
      // if: email and pass is correct --> routing home page
      if (8 < userPassword.length && userPassword.length < 20) {
        e.preventDefault();
        setIsLoading(true);

        return fetch('https://bootcampapi.techcs.io/api/fe/v1/authorization/signin', {
          method: 'POST',
          headers: {
            accept: '/*',
            'Content-Type': 'application/json',
          },
          credentials: 'same-origin',
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
          }),
        }).then(res => {
          console.log("Register Res: ", res)
          if(res.ok) {
            localStorage.setItem("email", userEmail);
          }
          return res.json();
        }).then(json => {
          console.log(json)
          setIsLoading(false);
          if (json.access_token) {
            toast.success('Kayıt işlemi başarılı', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            localStorage.setItem("token", json.access_token);
          } else {
            toast.error('Geçersiz Eposta yada Şifre', {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      } else {  // if pass is not correct
        toast.error('Geçerli bir şifre giriniz.', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {  // if email is not correct
      toast.error('Geçerli bir eposta giriniz.', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <RegisterWrapper id="register-main">
      <div className="main-img">
        <img src="/group52.png" alt="main_img" />
      </div>
      <div className="register-container">
        <img src="/group6607.svg" alt="second_img" />
        <div className="form-container">
          <div className="register-text">
            <p>Üye Ol</p>
            <p>Fırsatlardan yararlanmak için üye ol!</p>
          </div>
          <form>
            <label htmlFor="registerEmail">Email</label>
            <input type="email" id="registerEmail" placeholder="Email@example.com" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
            <label htmlFor="registerPassword">Şifre</label>
            <input type="password" id="registerPassword" placeholder="Password" value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
            <button onClick={registerBtn}>Kayıt Ol</button>
          </form>
          <p>Hesabınız var mı? <span style={{ color: '#4B9CE2', cursor: 'pointer' }} onClick={() => history.push("/login")}>Giriş Yap</span></p>
        </div>
      </div>
    </RegisterWrapper>
  )
}

export default Register;