import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import Header from '../HomePage/Header';
import { DetailWrapper } from './ProductDetailSC';
import { BuyModal, OfferModal } from '../../components/modal';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [productOffer, setProductOffer] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [hasBeenOffered, setHasBeenOffered] = useState(false);
  const [offerID, setOfferID] = useState("");

  let history = useHistory();
  const { id } = useParams();

  const { offer } = useSelector(state => state)
  // console.log("Redux Offer: ", offer)
  useEffect(() => {
    setOfferID(offer.offerID);
  }, [offer.offerID])

  useEffect(() => {
    localStorage.getItem("email") || history.push("/login")
  }, [history])

  useEffect(() => {
    (async () => {
      await axios.get(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
        .then(res => {
          // console.log("ProductDetail Res: ", res)
          setProduct(res.data)
        }).catch(err => {
          console.log(err);
        })
    })();
  }, [id])

  const cancelOffer = async () => {
    // Withdraw Offer
    fetch(`https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${offerID}`, {
      method: 'DELETE',
      headers: {
        accept: '/*',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id: offerID }),
    }).then(res => {
      console.log("cancelOffer Res: ", res);
    }).catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <DetailWrapper id="product-details-container">
        {
          product.length < 8
            ?
            <div>Ürün bilgileri yükleniyor...</div>
            :
            <>
              <img src={product.imageUrl} alt="product-img" />
              <div className="details">
                <h2>{product.title}</h2>
                <form>
                  <label>Marka:</label>
                  <span>{product.brand.title}</span>

                  <label>Renk:</label>
                  <span>{product.color.title}</span>

                  <label>Kullanım Durumu:</label>
                  <span>{product.status.title}</span>
                </form>
                <div className="price">
                  <p>{product.price} TL</p>
                </div>
                {
                  !product.isSold
                    ?
                    <>
                      {
                        productOffer && <div className="offer"> <p>Verilen Teklif: <strong>{productOffer} TL</strong></p> </div>
                      }
                      <div className="details-btn">
                        <button onClick={() => setShowBuyModal(true)}>Satın Al</button>
                        {
                          (() => {
                            if (offerID) {
                              return (<button onClick={() => { cancelOffer(); setOfferID("") }}>Teklifi Geri Çek</button>)
                            }
                            if (product.isOfferable) {
                              return (<button onClick={() => setShowOfferModal(true)}>Teklif Ver</button>)
                            }
                          })()
                        }
                        <BuyModal show={showBuyModal} close={() => setShowBuyModal(false)} id={product.id} isSold={() => product.isSold = false} />
                        <OfferModal show={showOfferModal} close={() => setShowOfferModal(false)} imgUrl={product.imageUrl} title={product.title} price={product.price} id={product.id} offerPrice={() => setProductOffer()} offered={() => setHasBeenOffered(!hasBeenOffered)} />
                      </div>
                    </>
                    :
                    <div className="details-btn">
                      <p>Bu Ürün Satışta Değil</p>
                    </div>
                }
                <div>
                  <h3>Açıklama</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </>
        }
      </DetailWrapper>
    </>
  )
}

export default ProductDetail;