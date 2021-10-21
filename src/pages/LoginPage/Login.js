import React, { useState, useEffect } from 'react';

// third part
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

// style
import { LoginWrapper } from './LoginSC';

// popup
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  // if already login --> routing index page
  useEffect(() => {
    Cookies.get('auth_token') && history.push("/")
  }, [history, loading])

  const loginBtn = async e => {
    e.preventDefault();
    setLoading(true);
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
      console.log("Login Res: ", res)
      return res.json();
    }).then(json => {
      console.log(json)
      if (json.success) {
        console.log("x3")
        this.setState({ error: '' });
        this.context.router.push(json.redirect);
      }
      else {
        console.log({ error: json.error })
      }
    });

    // TODO: Axios: 
    // await axios.post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signin", {
    //   email: userEmail,
    //   password: userPassword,
    // }).then(res => {
    //   setLoading(false);
    //   console.log("Login Res: ", res)
    //   toast.success('Giriş işlemi başarılı', {
    //     position: "top-right",
    //     autoClose: 2500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // Cookies.set('auth_token', res.data['access_token'], {domain: 'bootcampapi.techcs.io'})
    // document.cookie = "auth_token=" + res.data['access_token'];
    //   localStorage.setItem("email", JSON.parse(res.config.data).email);
    //   localStorage.setItem("password", JSON.parse(res.config.data).password);
    // }).catch(err => {
    //   setLoading(false);
    //   alert("Hatalı Giriş");
    // });
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
              <input type="email" className="form-control" id="loginEmail" placeholder="Email@example.com" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} required />
              <label htmlFor="loginPassword">Şifre</label>
              <input type="password" id="loginPassword" placeholder="Password" value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} required />
              <button type="click" onClick={loginBtn}>Giriş Yap</button>
            </form>
            <p>Hesabınız yok mu? <span onClick={() => history.push("/register")}>Kayıt Ol</span></p>
          </div>
        </div>
      </LoginWrapper>
      <ToastContainer />
    </>
  )
}

export default Login;