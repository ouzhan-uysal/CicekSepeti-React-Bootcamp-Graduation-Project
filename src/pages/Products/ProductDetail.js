import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import Cookies from 'js-cookie';
import Header from '../HomePage/Header';
import { DetailWrapper } from './ProductDetailSC';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    Cookies.get('token') || history.push("/login")
  }, [history])

  useEffect(() => {
    (async () => {
      await axios.get(`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
        .then(res => {
          setProduct(res.data)
        }).catch(err => console.log(err))
    })();
  }, [id])
  // console.log(product['imageUrl'])
  // console.log(product.imageUrl)

  const handleBuy = () => {
    console.log("al")
  }
  const handleOffer = () => {
    console.log("offer")
  }
  return (
    <>
      <Header />
      <DetailWrapper>
        <img src={product.imageUrl} alt="product-img" />
        <div className="details">
          {/* <h2>{product.title}</h2> */}
          <form>
            <label>Marka:</label>
            {/* <span>{product.brand.title}</span> */}

            <label>Renk:</label>
            {/* <span>{product.color.title}</span> */}

            <label>Kullanım Durumu:</label>
            <span>{product.status}</span>
          </form>
          <div className="price-offer">
            <p>{product.price} TL</p>
            <p>Verilen Teklif: <strong>119,90 TL</strong></p>
          </div>
          {
            product.isSold
              ?
              <div className="details-btn">
                <button>Satın Al</button>
                <button>Teklif Ver</button>
              </div>
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
      </DetailWrapper>
    </>
  )
}

export default ProductDetail;