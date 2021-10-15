import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import { HomeWrapper } from './HomeSC';
import Loaders from '../../components/loaderIndicator';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  useEffect(() => {
    (async () => {
      setError(null);
      setLoading(true);
      await axios.get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
        .then(response => {
          setLoading(false);
          setProducts(response.data);
        }).then(error => {
          setLoading(false);
          setError(error);
        })
    })();
  }, [])

  // const filterDeneme = async (title, id) => {
  //   await axios.get(`http://bootcampapi.techcs.io/api/fe/v1/detail/category/${id}`)
  //   .then(response => {
  //     console.log("res: ", response);
  //   }).then(error => {
  //     setError()
  //   })
  // }

  const filterProduct = title => {
    if (title === "hepsi") {
      setFilteredProducts(products)
    } else {
      const arr = products.filter(product => product.title.includes(title));
      setFilteredProducts(arr);
    }
  }

  return (
    <>
      <Header />
      <HomeWrapper>
        <img className="poster" src="/banner1.png" alt="banner" />
        {/* <button onClick={() => filterDeneme("sweetshirt", "DuucIuRejjB4nVJOAwbG")}>ID ve TITLE</button> */}
        <div className="category-container">
          <ul>
            <li onClick={() => filterProduct("hepsi")}>Hepsi<hr /></li>
            <li onClick={() => filterProduct("pantolon")}>Pantolon<hr /></li>
            <li onClick={() => filterProduct("gömlek")}>Gömlek<hr /></li>
            <li onClick={() => filterProduct("tişört")}>Tişört<hr /></li>
            <li onClick={() => filterProduct("şort")}>Şort<hr /></li>
            <li onClick={() => filterProduct("sweatshirt")}>Sweatshirt<hr /></li>
            <li onClick={() => filterProduct("kazak")}>Kazak<hr /></li>
            <li onClick={() => filterProduct("polar")}>Polar<hr /></li>
            <li onClick={() => filterProduct("mont")}>Mont<hr /></li>
            <li onClick={() => filterProduct("abiye")}>Abiye<hr /></li>
            <li onClick={() => filterProduct("ayakkabı")}>Ayakkabı<hr /></li>
            <li onClick={() => filterProduct("aksesuar")}>Aksesuar<hr /></li>
            <li onClick={() => filterProduct("çanta")}>Çanta<hr /></li>
            <li onClick={() => filterProduct("triko")}>Triko<hr /></li>
            <li onClick={() => filterProduct("diğer")}>Diğer<hr /></li>
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
                  <div className="product-item" key={product.id} title={product.title} id={product.id}>
                    <img src="/image5.png" alt="product-img" />
                    <div className="product-info">
                      <span>Marka</span>
                      <span>Renk: Lacivert</span>
                    </div>
                    <div className="product-price">
                      <p>1.999,00 TL</p>
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