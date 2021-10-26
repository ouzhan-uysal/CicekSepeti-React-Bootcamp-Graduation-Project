import axios from 'axios';
import React, { useState } from 'react';
import { BuyModalWrapper, OfferModalWrapper } from './modalSC';
import { SetOfferedProductId } from '../actions/offerAction';
import { useDispatch } from 'react-redux';

// TODO: Purchasing processes:
const PurchaseProduct = async (id) => {
  await axios.put(`https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${id}`)
    .then(res => {
      console.log("Purchase Res: ", res);
    }).catch(err => console.log(err))
}

export const BuyModal = ({ show, close, id }) => {
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
            <button onClick={() => close()}>Vazgeç</button>
            <button onClick={() => { PurchaseProduct(id); close(); }}>Satın Al</button>
          </div>
        </div>
      </div>
    </BuyModalWrapper >
  )
}

export const OfferModal = ({ show, close, imgUrl, title, price, id, offered }) => {
  const [offerPrice, setOfferPrice] = useState(0);
  const dispatch = useDispatch();

  // TODO: Offering processes:
  const OfferProduct = (id, offerPrice) => {
    fetch(`https://bootcampapi.techcs.io/api/fe/v1/product/offer/${id}`, {
      method: 'POST',
      headers: {
        accept: '/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        offeredPrice: Number(offerPrice),
      }),
    }).then(res => {
      // console.log("Offer Res: ", res);
      return res.json();
    }).then(json => {
      console.log(json)
      if (json.id) {
        dispatch(SetOfferedProductId(json.id));
      } else {
        console.log("ID not found in json.")
      }
    }).catch(err => console.log(err))
  }

  if (!show) {
    return null
  }
  return (
    <OfferModalWrapper>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-close">
            <h3>Teklif Ver </h3>
            <button onClick={() => close()}>
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
              <input type="radio" name="offer-radio" onChange={() => setOfferPrice(price * 20 / 100)} /> <span>%20'si Kadar Teklif Ver</span>
            </label>
            <label>
              <input type="radio" name="offer-radio" onChange={() => setOfferPrice(price * 30 / 100)} /> <span>%30'u Kadar Teklif Ver</span>
            </label>
            <label>
              <input type="radio" name="offer-radio" onChange={() => setOfferPrice(price * 40 / 100)} /> <span>%40'ı Kadar Teklif Ver</span>
            </label>
            <label>
              <input type="number" name="offer-radio" value={offerPrice} onChange={(e) => setOfferPrice(Number(e.target.value))} placeholder="Teklif Belirle (TL)" />
            </label>
          </div>
          <button onClick={() => { OfferProduct(id, offerPrice); close(); offered(); }}>Onayla</button>
        </div>
      </div>
    </OfferModalWrapper>
  )
}