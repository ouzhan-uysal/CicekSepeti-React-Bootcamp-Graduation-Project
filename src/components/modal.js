import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { BuyModalWrapper, OfferModalWrapper } from './modalSC';



const purchaseProduct = async (id, isSold) => {
  await axios.put(`https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${id}`, {
    withCredentials: true,
  })
    .then(res => {
      console.log("Purchase Res: ", res);
    }).catch(err => console.log(err))
}

export const BuyModal = ({ show, close, id, isSold }) => {
  if (!show) {
    return null
  }
  return (
    <BuyModalWrapper>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">Satın Al</div>
          <div className="modal-body">Satın almak istiyor musunuz?</div>
          <div className="modal-btn">
            <button onClick={close}>Vazgeç</button>
            <button onClick={() => purchaseProduct(id)}>Satın Al</button>
          </div>
        </div>
      </div>
    </BuyModalWrapper >
  )
}

// Offer Part:

const offerProduct = async id => {
  await axios.post(`/${id}`, { id })
    .then(res => {
      console.log("Offer Res: ", res)
    }).catch(err => console.log(err))
}
export const OfferModal = ({ show, close, imgUrl, title, price, id }) => {
  const [offerPrice, setOfferPrice] = useState(0);
  if (!show) {
    return null
  }
  return (
    <OfferModalWrapper>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-close">
            <h3>Teklif Ver </h3>
            <button onClick={close}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17.678" height="17.678" viewBox="0 0 17.678 17.678">
                <g id="Group_6618" data-name="Group 6618" transform="translate(-1163.737 -189.161)">
                  <path id="Line_61" data-name="Line 61" d="M0,22a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V21A1,1,0,0,1,0,22Z" transform="translate(1180 190.575) rotate(45)" fill="#525252" />
                  <path id="Line_62" data-name="Line 62" d="M0,22a1,1,0,0,1-1-1V0A1,1,0,0,1,0-1,1,1,0,0,1,1,0V21A1,1,0,0,1,0,22Z" transform="translate(1180 205.425) rotate(135)" fill="#525252" />
                </g>
              </svg>
            </button>
          </div>
          <div className="modal-header">
            <img src={imgUrl} alt="offer-img" />
            <span>{title}</span>
            <span>{price} TL</span>
          </div>
          <div className="modal-body">
            <label>
              <input type="radio" name="offer-radio" value={price * 20 / 100} /> <span>%20'si Kadar Teklif Ver</span>
            </label>
            <label>
              <input type="radio" name="offer-radio" value={price * 30 / 100} /> <span>%30'u Kadar Teklif Ver</span>
            </label>
            <label>
              <input type="radio" name="offer-radio" value={price * 40 / 100} /> <span>%40'ı Kadar Teklif Ver</span>
            </label>
            <label>
              <input type="number" name="offer-radio" value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)} placeholder="Teklif Belirle" />
            </label>
          </div>
          <button onClick={() => offerProduct(id)}>Onayla</button>
        </div>
      </div>
    </OfferModalWrapper>
  )
}