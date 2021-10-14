import React, { useEffect } from 'react';
import { HeaderWrapper } from './HeaderSC';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();

  return (
    <>
      <HeaderWrapper>
        <img className="header-logo" src="/group6607-logo.svg" alt="logo" onClick={() => history.push('/home')} />
        {
          localStorage.getItem('user-info')
            // if user is login:
            ? <div className="header-btn">
              <button><img src="/g6861.svg" alt="add-product" onClick={() => history.push('/products')} /> Ürün Ekle</button>
              <button onClick={() => history.push('/account')}><img src="/g3045.svg" alt="login-img" /> Hesabım</button>
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