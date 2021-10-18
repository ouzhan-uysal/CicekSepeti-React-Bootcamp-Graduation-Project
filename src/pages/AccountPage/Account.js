import React, { useEffect } from 'react';
import Header from '../HomePage/Header';
import { AccountWrapper } from './AccountSC';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

const Account = () => {
  let history = useHistory();

  useEffect(() => {
    Cookies.get('token') || history.push("/login")
  }, [history])

  return (
    <>
      <Header />
      <AccountWrapper>
        <div className="user-container">
          <img src="/user-logo.svg" alt="user-logo" />
          <span>email@example.com</span>
        </div>
        <div className="offer-container">
          <div className="offers-tab">
            <ul>
              <li>Teklif Aldıklarım<hr /></li>
              <li>Teklif Verdiklerim<hr /></li>
            </ul>
          </div>
          <div className="offers">
            <div className="offer-item">
              <img src="/image5.png" alt="product-img" />
              <div className="product-info">
                <p>Beli Uzun Trençkot Kareli</p>
                <p>Alınan Teklif: <span>119.90 TL</span></p>
              </div>
              <div className="offer-btns">
                <button type="click">Onayla</button>
                <button type="click">Reddet</button>
              </div>
            </div>
            <div className="offer-item">
              <img src="/image5.png" alt="product-img" />
              <div className="product-info">
                <p>Beli Uzun Trençkot Kareli</p>
                <p>Alınan Teklif: <span>119.90 TL</span></p>
              </div>
              <div className="offer-btns">
                <button type="click">Onayla</button>
                <button type="click">Reddet</button>
              </div>
            </div>
          </div>
        </div>
      </AccountWrapper>
    </>
  )
}

export default Account;