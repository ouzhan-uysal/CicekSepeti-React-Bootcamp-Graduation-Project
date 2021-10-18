import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import Header from '../HomePage/Header';
import { DetailWrapper } from './ProductDetailSC';

const ProductDetail = () => {
  let history = useHistory();

  useEffect(() => {
    Cookies.get('token') || history.push("/login")
  }, [history])

  return (
    <>
      <Header />
      <DetailWrapper>
        <img src="/productDetail.png" alt="product-img" />
        <div className="details">
          <h2>Beli Uzun Trençkot Kareli</h2>
          <form>
            <label>Marka:</label>
            <span>Lusi Viton</span>

            <label>Renk:</label>
            <span>Bej Rengi</span>

            <label>Kullanım Durumu:</label>
            <span>Az Kullanılmış</span>
          </form>
          <div className="price-offer">
            <p>319,90 TL</p>
            <p>Verilen Teklif: <strong>119,90 TL</strong></p>
          </div>
          <div className="details-btn">
            <button>Satın Al</button>
            <button>Teklif Ver</button>
          </div>
          <div>
            <h3>Açıklama</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique vel arcu elementum eleifend. Donec eu nibh nunc. Praesent justı mi, maximus vel consequat nec, auctor vel arcu.</p>
          </div>
        </div>
      </DetailWrapper>
    </>
  )
}

export default ProductDetail;