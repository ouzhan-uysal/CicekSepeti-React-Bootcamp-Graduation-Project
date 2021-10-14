import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import { HomeWrapper } from './HomeSC';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  useEffect(() => {
    (async () => {
      const { data, error } = await axios.get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all");
      setProducts(data);
      setError(error);
      setIsLoading(false);
    })();
  }, [])

  const filterDeneme = async (id) => {
    const {data, error} = await axios.get(`http://bootcampapi.techcs.io/api/fe/v1/detail/category/${id}`);
  }

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
      </HomeWrapper>
    </>
  )
}

export default Home;