import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header';
import { HomeWrapper } from './HomeSC';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all", {
      method: "GET",
      headers: {
        "etag": "2b-hGShxOkieaAVDloBubJVM+h58D8",
      }
    });
    // console.log(response)
    if (response.status === 200) {
      setProducts(response.data);
    } else {
      alert("API'den ürün çekilemedi.")
    }
  }

  return (
    <>
      <Header />
      <HomeWrapper>
        <img className="poster" src="/banner1.png" alt="banner" />
        <div className="category-container">
          <button onClick={getProducts}>GET PRODUCTS</button>
          <ul>
            <li>Hepsi<hr /></li>
            <li>Pantolon<hr /></li>
            <li>Gömlek<hr /></li>
            <li>Tişört<hr /></li>
            <li>Şort<hr /></li>
            <li>Sweatshirt<hr /></li>
            <li>Kazak<hr /></li>
            <li>Polar<hr /></li>
            <li>Mont<hr /></li>
            <li>Abiye<hr /></li>
            <li>Ayakkabı<hr /></li>
            <li>Aksesuar<hr /></li>
            <li>Çanta<hr /></li>
            <li>Triko<hr /></li>
            <li>Diğer<hr /></li>
          </ul>
        </div>
        <div className="product-container">
          {/* 
            products.map
          */}
          <div className="product-item">
            <img src="/image5.png" alt="img" />
            <div className="product-info">
              <span>Marka</span>
              <span>Renk: Lacivert</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>

          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
          <div className="product-item">
            <div className="product-img">
              <img src="/image5.png" alt="img" />
            </div>
            <div className="product-info">
              <span>Marka</span>
              <span>Renk</span>
            </div>
            <div className="product-price">
              <p>1.999,00 TL</p>
            </div>
          </div>
        </div>
      </HomeWrapper>
    </>
  )
}

export default Home;