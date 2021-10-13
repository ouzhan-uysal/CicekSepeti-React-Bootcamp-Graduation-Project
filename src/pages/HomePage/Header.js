import React from 'react';
import { HeaderWrapper } from './HeaderSC';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <img className="header-logo" src="/group6607-logo.svg" alt="logo" />
        <div className="header-btn">
          <button><img src="/g6861.svg" alt="add-product"/> Ürün Ekle</button>
          <button><img src="/g3045.svg" alt="login-img"/> Giriş Yap</button>
        </div>
      </HeaderWrapper>
    </>
  )
}

export default Header;