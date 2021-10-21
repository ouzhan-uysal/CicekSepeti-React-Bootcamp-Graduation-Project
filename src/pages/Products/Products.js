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

  // Input States:
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    category: {
      title: "",
      id: "",
    },
    brand: {
      title: "",
      id: "",
    },
    color: {
      title: "",
      id: "",
    },
    status: {
      title: "",
      id: "",
    },
    price: 0,
    isOfferable: false,
  })
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImgUrl, setProductImgUrl] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [isOfferable, setIsOfferable] = useState(false);

  let history = useHistory();

  useEffect(() => {
    Cookies.get('auth_token') || history.push("/login")
  }, [history])

  useEffect(() => {
    (async () => {
      await axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/brand/all")
        .then(res => {
          setBrands(res.data);
        })
        .catch(err => {
          console.log("Hata: ", err);
        })
    })();
  }, [])

  useEffect(() => {
    (async () => {
      await axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/color/all")
        .then(res => {
          setColors(res.data);
        })
        .catch(err => {
          console.log("Hata: ", err)
        })
    })();
  }, [])

  useEffect(() => {
    (async () => {
      await axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/status/all")
        .then(res => {
          setStatus(res.data);
        })
        .catch(err => {
          console.log("Hata: ", err)
        })
    })();
  }, [])

  const createNewProduct = async () => {
    const productValues = {
      price: productPrice,
      imageUrl: productImgUrl,
      title: productInfo.name,
      status: {
        title: productStatus,
        id: "",
      },
      color: {
        title: productColor,
        id: "",
      },
      brand: {
        title: productBrand,
        id: "",
      },
      category: {
        title: productCategory,
        id: "",
      },
      desciption: productDescription,
      isOfferable: isOfferable,
    }
    console.log(productValues)
    await axios.post("https://bootcampapi.techcs.io/api/fe/v1/product/create", {
      productValues
    }).then(res => {
      console.log(res)
    })
      .catch(err => {
        console.log("Hata: ", err)
      })
  }

  return (
    <>
      <Header />
      <ProductWrapper>
        <div className="product-details">
          <h2>Ürün Detayları</h2>
          <form>
            <label htmlFor="pname">Ürün Adı</label>
            <input type="text" id="pname" name="pname" maxLength="100" placeholder="Örnek: Iphone 12 Pro Max" value={productInfo.name} onChange={(e) => setProductInfo({ name: e.target.value })} required />

            <label htmlFor="description">Açıklama</label>
            <textarea id="description" name="description" rows="5" cols="30" maxLength="500" placeholder="Ürün açıklaması girin" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required></textarea>

            <label htmlFor="categories">Kategoriler</label>
            <select id="categories" name="categories" defaultValue={'DEFAULT'} onChange={(e) => setProductCategory(e.target.value)} required>
              <option value="DEFAULT" disabled>Kategori Seç</option>
              {
                menuItems.slice(1, menuItems.length).map(item => (
                  <option key={item} value={item.toLowerCase()}>{item}</option>
                ))
              }
            </select>

            <label htmlFor="brand" >Marka</label>
            <select id="brand" name="brand" defaultValue={'DEFAULT'} onChange={(e) => setProductBrand(e.target.value)} required>
              <option value="DEFAULT" disabled>Marka Seç</option>
              {
                brands.map(item => (
                  <option key={item.id} value={item.title}>{item.title}</option>
                ))
              }
            </select>

            <label htmlFor="color">Renk</label>
            <select id="color" name="color" defaultValue={'DEFAULT'} onChange={(e) => setProductColor(e.target.value)} required>
              <option value="DEFAULT" disabled>Renk Seç</option>
              {
                colors.map(item => (
                  <option key={item.id} value={item.title}>{item.title}</option>
                ))
              }
            </select>

            <label htmlFor="status">Kullanım Durumu</label>
            <select id="status" name="status" defaultValue={'DEFAULT'} onChange={(e) => setProductStatus(e.target.value)} required>
              <option value="DEFAULT" disabled>Kullanım Durumunu Seç</option>
              {
                status.map(item => (
                  <option key={item.id} value={item.title}>{item.title}</option>
                ))
              }
            </select>

            <label htmlFor="price">Fiyat</label>
            <input type="number" id="price" placeholder="TL" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />

            <label htmlFor="offer">Teklif Opsiyonu
              <Switch onChange={() => setIsOfferable(prevCheck => !prevCheck)} checked={isOfferable} />
            </label>
          </form>
        </div>
        <hr />
        <div className="product-img">
          <h2>Ürün Görseli</h2>
          <div>
            <img src="/upload-img-logo.svg" alt="set-img" />
            <p>Sürükleyip bırakarak yükle veya
              <input id="product-file" type="file" accept="image/png, image/jpeg" value={productImgUrl} onChange={(e) => setProductImgUrl(e.target.value)}></input>
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