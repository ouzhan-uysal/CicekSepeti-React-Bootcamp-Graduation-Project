import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
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
    if (userEmail.includes("@")) {
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
          // console.log("Register Res: ", res)
          localStorage.setItem("email", userEmail);
          return res.json();
        }).then(json => {
          // console.log(json)
          setIsLoading(false);
          toast.success('Kayıt işlemi başarılı', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          localStorage.setItem("token", json.access_token);
        });

        // TODO: Axios
        // await axios.post("https://bootcampapi.techcs.io/api/fe/v1/authorization/signup", {
        //   email: userEmail,
        //   password: userPassword,
        // }).then(res => {
        //   setLoading(false);
        //   // console.log("Register Res: ", res)
        //   toast.success('Kayıt işlemi başarılı', {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   });
        //   // document.cookie = "token=" + res.data['access_token'];
        //   // localStorage.setItem("email", JSON.parse(res.config.data).email);
        //   // localStorage.setItem("password", JSON.parse(res.config.data).password);
        // }).catch(err => {
        //   setLoading(false);
        //   setError(err);
        //   console.log("Hata: ", error);
        // });
      } else {  // if pass is not correct
        alert("Hatalı Şifre")
      }
    } else {  // if email is not correct
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
      <ToastContainer />
    </>
  )
}

export default Register;