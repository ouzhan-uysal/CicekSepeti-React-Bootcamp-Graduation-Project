import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import { HomeWrapper } from './HomeSC';
import Loaders from '../../components/loaderIndicator';
import { useHistory, useParams } from 'react-router';
import { menuItems } from '../../contants';
import { useDispatch } from 'react-redux';
import { SET_PRODUCT_OFFER } from '../../actions/actionTypes';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  const dispatch = useDispatch();
  const { categoryTitle } = useParams();

  useEffect(() => {
    // if user select "Hepsi" tab || categoryTitle = undefined in the first work
    if (categoryTitle === "hepsi" || categoryTitle === undefined) {
      setFilteredProducts(products);
    }
    else {
      const categoryFilter = products.filter(product => product.category.title.includes(categoryTitle));
      setFilteredProducts(categoryFilter);
    }
  }, [products, categoryTitle])

  useEffect(() => {
    (async () => {
      setError(null);
      setLoading(true);
      await axios.get("https://bootcampapi.techcs.io/api/fe/v1/product/all")
        .then(res => {
          setLoading(false);
          setProducts(res.data);
        }).catch(err => {
          setLoading(false);
          setError(err);
          console.log("Hata: ", error);
        })
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const productRouter = (id, category, title, price) => {
    dispatch({
      type: SET_PRODUCT_OFFER,
      payload: {
        product: title,
        productID: id,
        price: price,
        offerPrice: 0
      }
    })
    history.push(`/${category}/${id}`)
  }

  return (
    <>
      <Header id="x-container"/>
      <HomeWrapper id="home-container" >
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
                  <div className="product-item" key={product.id} title={product.category.title} id={product.id} onClick={() => productRouter(product.id, product.category.title, product.title, product.price)}>
                    <img src={product.imageUrl} alt="product-img" />
                    <div className="product-info">
                      <span>{product.brand.title}</span>
                      <span>Renk: {product.color.title}</span>
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