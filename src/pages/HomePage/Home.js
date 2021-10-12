import React from 'react';
import Header from './Header';
import { HomeWrapper } from './HomeSC';

const Home = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <img className="poster" src="/banner1.png" alt="banner" />
        <div className="category-container">
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
          <div className="product-item">
            <img src="/image5.png" alt="img" />
            <div className="product-info">
              <span>Marka</span>
              <span>Renk: Lacivert</span>
            </div>
            <div className="product-price">
              <p>Fiyat</p>
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
              <p>Fiyat</p>
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
              <p>Fiyat</p>
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
              <p>Fiyat</p>
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
              <p>Fiyat</p>
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
              <p>Fiyat</p>
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
              <p>Fiyat</p>
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
              <p>Fiyat</p>
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
              <p>Fiyat</p>
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
              <p>Fiyat</p>
            </div>
          </div>
        </div>
      </HomeWrapper>
    </>
  )
}

export default Home;