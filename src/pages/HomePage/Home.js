import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import { HomeWrapper } from './HomeSC';
import Loaders from '../../components/loaderIndicator';
import { useHistory, useParams } from 'react-router';
import { menuItems } from '../../contants';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  const { categoryTitle } = useParams();

  useEffect(() => {
    // if user select "Hepsi" tab || categoryTitle = undefined in the first work || user manually input url
    if (categoryTitle === "hepsi" || categoryTitle === undefined || categoryTitle !== menuItems) {
      setFilteredProducts(products);
    }
    else {
      const categoryFilter = products.filter(product => product.title.includes(categoryTitle));
      setFilteredProducts(categoryFilter);
    }
  }, [products, categoryTitle])

  useEffect(() => {
    (async () => {
      setError(null);
      setLoading(true);
      await axios.get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
        .then(response => {
          setLoading(false);
          setProducts(response.data);
        }).catch(err => {
          setLoading(false);
          setError(err);
          console.log("Hata: ", error);
        })
    })();
  }, [error])

  return (
    <>
      <Header />
      <HomeWrapper>
        <img className="poster" src="/banner1.png" alt="banner" />
        <div className="category-container">
          <ul>
            {
              menuItems.map(item => (
                <li key={item} onClick={() => history.push(`/${item.toLowerCase()}`)}>{item} <hr /></li>
              ))
            }
          </ul>
        </div>
        {
          loading
            ?
            <div className="loading-spinner" style={{ margin: 'auto' }}><Loaders /></div>
            :
            <div className="product-container">
              {
                filteredProducts.map(product => (
                  <div className="product-item" key={product.id} title={product.title} id={product.id} onClick={() => history.push(`/${product.title}/${product.id}`)}>
                    <img src="/image5.png" alt="product-img" />
                    <div className="product-info">
                      <span>{product.brand}</span>
                      <span>Renk: {product.color}</span>
                    </div>
                    <div className="product-price">
                      <p>{product.price} TL</p>
                    </div>
                  </div>
                ))
              }
            </div>
        }
      </HomeWrapper>
    </>
  )
}

export default Home;