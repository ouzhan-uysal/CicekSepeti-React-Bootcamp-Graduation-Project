import React, { useState, useEffect } from 'react';

// third part
import { useHistory } from 'react-router-dom';

// style
import { LoginWrapper } from './LoginSC';

// popup
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();

  // if already login --> routing index page
  // console.log()
  useEffect(() => {
    localStorage.getItem('email') && history.push("/")
  }, [history, isLoading])

  const loginBtn = async e => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Fetch:
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
      // console.log("Login Res: ", res)
      if (res.ok) {
        toast.success('Giriş işlemi başarılı', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem("email", userEmail);
      }
      return res.json();
    }).then(json => {
      console.log(json)
      setIsLoading(false);
      localStorage.setItem("token", json.access_token);
    });
  }

  return (
    <>
      <LoginWrapper>
        <div className="main-img">
          <img src="/group52.png" alt="main_img" />
        </div>
        <div className="login-container">
          <img src="/group6607.svg" alt="second_img" />
          <div className="form-container">
            <div className="login-text">
              <p>Giriş Yap</p>
              <p>Fırsatlardan yararlanmak için giriş yap!</p>
            </div>
            <form>
              <label htmlFor="loginEmail">Email</label>
              <input type="email" className="form-control" id="loginEmail" placeholder="Email@example.com" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} required />
              <label htmlFor="loginPassword">Şifre</label>
              <input type="password" id="loginPassword" placeholder="Password" value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} required />
              <button type="click" onClick={loginBtn}>Giriş Yap</button>
            </form>
            <p>Hesabınız yok mu? <span style={{ color: '#4B9CE2', cursor: 'pointer' }} onClick={() => history.push("/register")}>Kayıt Ol</span></p>
          </div>
        </div>
      </LoginWrapper>
      <ToastContainer />
    </>
  )
}

export default Login;