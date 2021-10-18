import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { menuItems } from '../../contants';
import Header from '../HomePage/Header';
import { ProductWrapper } from './ProductSC';
import Cookies from 'js-cookie';
import Switch from 'react-switch';
import { useHistory } from 'react-router';

const Products = () => {
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [status, setStatus] = useState([]);
  const [error, setError] = useState(null);

  const [checked, setChecked] = useState(false);

  let history = useHistory();

  useEffect(() => {
    Cookies.get('token') || history.push("/login")
  }, [history])

  useEffect(() => {
    (async () => {
      setError(null);
      await axios.get("http://bootcampapi.techcs.io/api/fe/v1/detail/brand/all")
        .then(res => {
          setBrands(res.data);
        })
        .catch(err => {
          setError(err);
          console.log("Hata: ", error);
        })
    })();
  }, [error])

  useEffect(() => {
    (async () => {
      await axios.get("http://bootcampapi.techcs.io/api/fe/v1/detail/color/all")
        .then(res => {
          setColors(res.data);
        })
        .catch(err => {
          setError(err);
          console.log("Hata: ", error)
        })
    })();
  }, [error])

  useEffect(() => {
    (async () => {
      await axios.get("http://bootcampapi.techcs.io/api/fe/v1/detail/status/all")
        .then(res => {
          setStatus(res.data);
        })
        .catch(err => {
          setError(err);
          console.log("Hata: ", error)
        })
    })();
  }, [error])

  const handleOfferType = () => {
    setChecked(prevCheck => !prevCheck);
  }

  // const createNewProduct = async (e) => {
  //   const productValues = {
  //     price: e.target.value,

  const createNewProduct = async () => {
    const productValues = {
      price: document.getElementById("price").value,
      imageUrl: document.getElementById("product-file").value,
      title: document.getElementById("pname").value,
      status: {
        title: document.getElementById("status").value,
        id: "",
      },
      color: {
        title: document.getElementById("color").value,
        id: "",
      },
      brand: {
        title: document.getElementById("brand").value,
        id: "",
      },
      category: {
        title: document.getElementById("categories").value,
        id: "",
      },
      desciption: document.getElementById("description").value,
      isOfferable: checked,
    }
    console.log(productValues)
    // await axios.post("http://bootcampapi.techcs.io/api/fe/v1/product/create")
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     setError(err);
    //     console.log("Hata: ", err)
    //   })
  }

  return (
    <>
      <Header />
      <ProductWrapper>
        <div className="product-details">
          <h2>Ürün Detayları</h2>
          <form>
            <label htmlFor="pname">Ürün Adı</label>
            <input type="text" id="pname" name="pname" maxLength="100" placeholder="Örnek: Iphone 12 Pro Max" required />

            <label htmlFor="description">Açıklama</label>
            <textarea id="description" name="description" rows="5" cols="30" maxLength="500" placeholder="Ürün açıklaması girin" required></textarea>

            <label htmlFor="categories">Kategoriler</label>
            <select id="categories" name="categories" defaultValue={'DEFAULT'} required>
              <option value="DEFAULT" disabled>Kategori Seç</option>
              {
                menuItems.slice(1, menuItems.length).map(item => (
                  <option key={item} value={item.toLowerCase()}>{item}</option>
                ))
              }
            </select>

            <label htmlFor="brand" >Marka</label>
            <select id="brand" name="brand" defaultValue={'DEFAULT'} required>
              <option value="DEFAULT" disabled>Marka Seç</option>
              {
                brands.map(item => (
                  <option key={item.id} value={item.title}>{item.title}</option>
                ))
              }
            </select>

            <label htmlFor="color">Renk</label>
            <select id="color" name="color" defaultValue={'DEFAULT'} required>
              <option value="DEFAULT" disabled>Renk Seç</option>
              {
                colors.map(item => (
                  <option key={item.id} value={item.title}>{item.title}</option>
                ))
              }
            </select>

            <label htmlFor="status">Kullanım Durumu</label>
            <select id="status" name="status" defaultValue={'DEFAULT'} required>
              <option value="DEFAULT" disabled>Kullanım Durumunu Seç</option>
              {
                status.map(item => (
                  <option key={item.id} value={item.title}>{item.title}</option>
                ))
              }
            </select>

            <label htmlFor="price">Fiyat</label>
            <input type="number" min="0" id="price" placeholder="TL" required />

            <label htmlFor="offer">Teklif Opsiyonu
              {/* <input type="checkbox" id="offer" name="offer" /> */}
              <Switch onChange={handleOfferType} checked={checked} />
            </label>
          </form>
        </div>
        <hr />
        <div className="product-img">
          <h2>Ürün Görseli</h2>
          <div>
            <img src="/upload-img-logo.svg" alt="set-img" />
            <p>Sürükleyip bırakarak yükle veya
              <input id="product-file" type="file" accept="image/png, image/jpeg"></input>
            </p>
            <p>PNG ve JPEG Dosya boyutu: max. 100kb</p>
          </div>
          <button onClick={createNewProduct}>Kaydet</button>
        </div>
      </ProductWrapper>
    </>
  )
}

export default Products;