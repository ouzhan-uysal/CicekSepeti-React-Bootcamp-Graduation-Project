import React, { useEffect } from 'react';
import { HeaderWrapper } from './HeaderSC';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import { LOGIN_SUCCESS } from '../../actions/actionTypes';
// import { useDispatch } from 'react-redux';

const Header = () => {
  let history = useHistory();

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );
  }, [])

  return (
    <>
      <HeaderWrapper>
        <header>
          <img className="header-logo" src="/group6607-logo.svg" alt="logo" onClick={() => history.push('/')} />
          {
            localStorage.getItem("email")
              // if user is login:
              ? <div className="header-btn">
                <button onClick={() => history.push('/add')}><img src="/g6861.svg" alt="add-product" /> Ürün Ekle</button>
                <button onClick={() => history.push('/account')}><img src="/g3045.svg" alt="login-img" /> Hesabım</button>
                <button onClick={() => { document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; localStorage.removeItem("email"); localStorage.removeItem("token"); history.push('/login') }}> Çıkış Yap</button>
              </div>
              // else:
              : <div className="header-btn">
                <button onClick={() => history.push('/login')}><img src="/g3045.svg" alt="login-img" /> Giriş Yap</button>
              </div>
          }
        </header>
      </HeaderWrapper>
    </>
  )
}

export default Header;