import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import Header from '../HomePage/Header';
import { DetailWrapper } from './ProductDetailSC';
import { BuyModal, OfferModal } from '../../components/modal';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [productOffer, setProductOffer] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  let history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    localStorage.getItem("email") || history.push("/login")
  }, [history])

  useEffect(() => {
    (async () => {
      await axios.get(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
        .then(res => {
          console.log("ProductDetail Res: ", res)
          setProduct(res.data)
        }).catch(err => {
          console.log(err);
        })
    })();
  }, [id])

  const cancelOffer = async id => {
    await axios.delete(`https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer//${id}`)
      .then(res => {
        console.log("cancelOffer Res: ", res)
      }).catch(err => console.log(err))

    // FIXME: Fetch
    // return fetch(`https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     accept: '/*',
    //     'Authorization': `Bearer ${localStorage.getItem("token")}`,
    //   },
    //   credentials: 'same-origin',
    //   body: ({ id: id }),
    // }).then(res => {
    //   console.log("cancelOffer Res: ", res);
    //   return res.json();
    // }).then(data => console.log(data))
    //   .catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <DetailWrapper>
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
                      {productOffer && <div className="offer"> <p>Verilen Teklif: <strong>{productOffer} TL</strong></p> </div>}
                      <div className="details-btn">
                        <button onClick={() => setShowBuyModal(true)}>Satın Al</button>
                        {
                          product.isOfferable &&
                          <>
                            <button onClick={() => setShowOfferModal(true)}>Teklif Ver</button>
                            <button onClick={() => cancelOffer(product.id)}>Teklifi Geri Çek</button>
                          </>
                          // FIXME: redux tan ürünün offerPrice'ı var ise teklifi geri çek butonu koyacam.
                        }
                        <BuyModal show={showBuyModal} close={() => setShowBuyModal(false)} id={product.id} isSold={() => product.isSold = false} />
                        <OfferModal show={showOfferModal} close={() => setShowOfferModal(false)} imgUrl={product.imageUrl} title={product.title} price={product.price} id={product.id} offerPrice={() => setProductOffer()} />
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