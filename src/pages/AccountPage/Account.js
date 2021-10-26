import React, { useState, useEffect } from 'react';
import Header from '../HomePage/Header';
import { AccountWrapper } from './AccountSC';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Account = () => {
  const [product, setProduct] = useState([]);

  let history = useHistory();
  const { offers } = useParams();
  const [listOffers, setListOffers] = useState([]);

  // authentication for user
  const auth = useSelector(state => state.auth);
  // console.log(auth)

  useEffect(() => {
    localStorage.getItem("email") || history.push("/login")
  }, [history])

  useEffect(() => {
    (async () => {
      // Teklif verdiklerim
      if (offers === "received-offers") {
        axios.get("https://bootcampapi.techcs.io/api/fe/v1/account/received-offers")
          .then(res => {
            // console.log("Received Offers: ", res);
            setListOffers(res.data);
          }).catch(err => console.log(err))
      } else {
        // Teklif aldıklarım
        axios.get("https://bootcampapi.techcs.io/api/fe/v1/account/given-offers")
          .then(res => {
            // console.log("Given Offers: ", res);
            setListOffers(res.data);
          }).catch(err => console.log(err))
      }
    })();
  }, [offers])

  // Teklif Yaptığın ürünü satın al.
  const purchaseOffer = async id => {
    await axios.put(`https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${id}`)
      .then(res => {
        // console.log("Purchase: ", res)
      }).catch(err => console.log(err))
  }
  // Ürününe gelen teklifi reddet.
  const rejectOffer = async id => {
    await axios.post(`https://bootcampapi.techcs.io/api/fe/v1/account/reject-offer/${id}`)
      .then(res => {
        // console.log("Reject: ", res)
      }).catch(err => console.log(err))
  }
  // Ürününe gelen teklifi kabul et.
  const acceptOffer = async id => {
    axios.put(`https://bootcampapi.techcs.io/api/fe/v1/account/accept-offer/${id}`)
      .then(res => {
        // console.log("Accept: ", res)
      }).catch(err => console.log(err))
  }
  // listOffers.forEach(item => console.log(item))

  return (
    <>
      <Header />
      <AccountWrapper id="account-container">
        <div className="user-container">
          <img src="/user-logo.svg" alt="user-logo" />
          <span>{auth.email || localStorage.getItem("email")}</span>
        </div>
        <div className="offer-container">
          <div className="offers-tab">
            <ul>
              <li onClick={() => history.push("/account/given-offers")}>Teklif Verdiklerim<hr /></li>
              <li onClick={() => history.push("/account/received-offers")}>Teklif Aldıklarım<hr /></li>
            </ul>
          </div>
          <div className="offers">
            {
              offers === "received-offers"
                ?
                // Teklif Verdiklerim:
                listOffers.map(item => (
                  <div className="offer-item" key={item.id}>
                    <img src={item.product.imageUrl} alt="product-img" />
                    <div className="product">
                      <div className="product-info">
                        <p>{item.product.title}</p>
                        <p>Alınan Teklif: <span>{item.offeredPrice} TL</span></p>
                      </div>
                      <div className="offer-btns">
                        {
                          (() => {
                            if (item.status === "rejected") {
                              return (<span style={{ color: '#F77474' }}>Reddedildi</span>)
                            } else if (item.status === "accepted") {
                              return (<span style={{ color: '#4B9CE2' }}>Onaylandı</span>)
                            } else if (item.isSold === "sold") {
                              return (<span style={{ color: '#46AF32' }}>Ürün satıldı</span>)
                            } else {
                              return (
                                <>
                                  <button onClick={() => acceptOffer(item.id)}>Onayla</button>
                                  <button onClick={() => rejectOffer(item.id)}>Reddet</button>
                                </>
                              )
                            }
                          })()
                        }
                      </div>
                    </div>
                  </div>
                ))
                :
                // Teklif Aldıklarım:
                listOffers.map(item => (
                  <div className="offer-item" key={item.id}>
                    <img src={item.product.imageUrl} alt="product-img" />
                    <div className="product">
                      <div className="product-info">
                        <p>{item.product.title}</p>
                        <p>Verilen Teklif: <span>{item.offeredPrice} TL</span></p>
                      </div>
                      <div className="offer-btns">
                        {
                          !item.isSold && <button onClick={() => purchaseOffer(item.id)}>Satın Al</button>
                        }
                        {
                          (() => {
                            if (item.status === "rejected") {
                              return (<span style={{ color: '#F77474' }}>Reddedildi</span>)
                            } else if (item.status === "accepted") {
                              return (<span style={{ color: '#4B9CE2' }}>Onaylandı</span>)
                            } else if (item.isSold === "sold") {
                              return (<span style={{ color: '#46AF32' }}>Ürün Satıldı</span>)
                            } else {
                              return (<span>Cevap Bekleniyor...</span>)
                            }
                          })()
                        }
                      </div>
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