import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { HeaderWrapper } from './HeaderSC';
import { useHistory } from 'react-router-dom';
import { LOGIN_SUCCESS } from '../../actions/actionTypes';
import { useDispatch } from 'react-redux';

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get('auth_token')) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          email: localStorage.getItem("email"),
          token: Cookies.get('auth_token'),
          isAuthenticated: true,
        }
      })
    }
  }, [dispatch])

  return (
    <>
      <HeaderWrapper>
        <img className="header-logo" src="/group6607-logo.svg" alt="logo" onClick={() => history.push('/')} />
        {
          Cookies.get('auth_token')
            // if user is login:
            ? <div className="header-btn">
              <button onClick={() => history.push('/add')}><img src="/g6861.svg" alt="add-product" /> Ürün Ekle</button>
              <button onClick={() => history.push('/account')}><img src="/g3045.svg" alt="login-img" /> Hesabım</button>
              <button onClick={() => { document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; localStorage.removeItem("email"); localStorage.removeItem("password"); history.push('/login') }}> Çıkış Yap</button>
            </div>
            // else:
            : <div className="header-btn">
              <button onClick={() => history.push('/login')}><img src="/g3045.svg" alt="login-img" /> Giriş Yap</button>
            </div>
        }
      </HeaderWrapper>
    </>
  )
}

export default Header;