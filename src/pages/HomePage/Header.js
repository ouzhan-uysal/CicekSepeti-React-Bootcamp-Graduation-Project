import React from 'react';
import Cookies from 'js-cookie';
import { HeaderWrapper } from './HeaderSC';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();

  return (
    <>
      <HeaderWrapper>
        <img className="header-logo" src="/group6607-logo.svg" alt="logo" onClick={() => history.push('/')} />
        {
          Cookies.get('token')
            // if user is login:
            ? <div className="header-btn">
              <button onClick={() => history.push('/add')}><img src="/g6861.svg" alt="add-product" /> Ürün Ekle</button>
              <button onClick={() => history.push('/account')}><img src="/g3045.svg" alt="login-img" /> Hesabım</button>
              <button onClick={() => { document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; history.push('/login') }}> Çıkış Yap</button>
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