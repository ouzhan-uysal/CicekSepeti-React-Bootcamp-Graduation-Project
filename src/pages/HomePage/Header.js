import React, { useEffect } from 'react';
import { HeaderWrapper } from './HeaderSC';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {

    }
  }, [])
  return (
    <>
      <HeaderWrapper>
        <img className="header-logo" src="/group6607-logo.svg" alt="logo" onClick={() => history.push('/home')} />
        <div className="header-btn">
          <button><img src="/g6861.svg" alt="add-product" /> Ürün Ekle</button>
          {
            localStorage.getItem('user-info')
              ? <button onClick={() => history.push('/account')}><img src="/g3045.svg" alt="login-img" /> Hesabım</button>
              : <button onClick={() => history.push('/login')}><img src="/g3045.svg" alt="login-img" /> Giriş Yap</button>
          }

        </div>
      </HeaderWrapper>
    </>
  )
}

export default Header;