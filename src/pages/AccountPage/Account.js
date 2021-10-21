import React, { useState, useEffect } from 'react';
import Header from '../HomePage/Header';
import { AccountWrapper } from './AccountSC';
import Cookies from 'js-cookie';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Account = () => {
  let history = useHistory();
  const { offers } = useParams();
  const [listOffers, setListOffers] = useState([]);

  // authentication for user
  const auth = useSelector(state => state.auth);
  // console.log(auth)

  useEffect(() => {
    Cookies.get('auth_token') || history.push("/login")
  }, [history])

  useEffect(() => {
    (async () => {
      if (offers === "received-offers") {
        await axios.get("https://bootcampapi.techcs.io/api/fe/v1/account/received-offers")
          .then(res => {
            setListOffers(res.data);
          }).catch(err => console.log(err))
      } else {
        await axios.get("https://bootcampapi.techcs.io/api/fe/v1/account/given-offers")
          .then(res => {
            setListOffers(res.data);
          }).catch(err => console.log(err))
      }
    })();
  }, [offers])

  const rejectOffer = async id => {
    await axios.post(`https://bootcampapi.techcs.io/api/fe/v1/account/reject-offer/${id}`, { id })
      .then(res => {
        console.log("Reject: ", res)
      }).catch(err => console.log(err))
  }
  const acceptOffer = async id => {
    await axios.put(`https://bootcampapi.techcs.io/api/fe/v1/account/accept-offer//${id}`, { id })
      .then(res => {
        console.log("Accept: ", res)
      }).catch(err => console.log(err))
  }
  const cancelOffer = async id => {
    await axios.delete(`https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer//${id}`, { id })
      .then(res => {
        console.log("Cancel: ", res)
      }).catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <AccountWrapper>
        <div className="user-container">
          <img src="/user-logo.svg" alt="user-logo" />
          <span>{auth.email}</span>
        </div>
        <div className="offer-container">
          <div className="offers-tab">
            <ul>
              <li onClick={() => history.push("/account/given-offers")}>Teklif Aldıklarım<hr /></li>
              <li onClick={() => history.push("/account/received-offers")}>Teklif Verdiklerim<hr /></li>
            </ul>
          </div>
          <div className="offers">
            {
              offers === "received-offers"
                ?
                listOffers.map(item => (
                  <div className="offer-item">
                    <img src="/image5.png" alt="product-img" />
                    <div className="product-info">
                      <p>Beli Uzun Trençkot Kareli</p>
                      <p>Alınan Teklif: <span>119.90 TL</span></p>
                    </div>
                    <div className="offer-btns">
                      <button onClick={() => rejectOffer(item.id)}>Satın Al</button>
                    </div>
                  </div>
                ))
                :
                listOffers.map(item => (
                  <div className="offer-item">
                    <img src="/image5.png" alt="product-img" />
                    <div className="product-info">
                      <p>Beli Uzun Trençkot Kareli</p>
                      <p>Alınan Teklif: <span>119.90 TL</span></p>
                    </div>
                    <div className="offer-btns">
                      <button onClick={() => acceptOffer(item.id)}>Onayla</button>
                      <button onClick={() => cancelOffer(item.id)}>Reddet</button>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </AccountWrapper>
    </>
  )
}

export default Account;