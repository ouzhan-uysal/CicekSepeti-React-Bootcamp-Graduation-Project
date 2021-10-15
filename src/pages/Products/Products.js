import React from 'react';
import Header from '../HomePage/Header';
import { ProductWrapper } from './ProductSC';

const Products = () => {
  return (
    <>
      <Header />
      <ProductWrapper>
        <div className="product-details">
          <h2>Ürün Detayları</h2>
          <form>
            <label htmlFor="pname">Ürün Adı</label>
            <input type="text" id="pname" name="pname" placeholder="Örnek: Iphone 12 Pro Max" />

            <label htmlFor="explanation">Açıklama</label>
            <textarea id="explanation" name="explanation" rows="5" cols="30" placeholder="Ürün açıklaması girin"></textarea>

            <label htmlFor="categories">Kategoriler</label>
            <select id="categories" name="categories">
              <option value="" disabled selected>Kategori Seç</option>
              <option value="pantalon">Pantalon</option>
              <option value="gömlek">Gömlek</option>
              <option value="tişört">Tişört</option>
              <option value="şort">Şort</option>
            </select>

            <label htmlFor="brand" >Marka</label>
            <select id="brand" name="brand" placeholder="Marka seç">
              <option value="" disabled selected>Marka Seç</option>
              <option value="Mavi">Mavi</option>
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
            </select>

            <label htmlFor="color">Renk</label>
            <select id="color" name="color">
              <option value="" disabled selected>Renk Seç</option>
              <option value="siyah">Siyah</option>
              <option value="kırmızı">Kırmızı</option>
              <option value="beyaz">Beyaz</option>
              <option value="mavi">Mavi</option>
            </select>

            <label htmlFor="status">Kullanım Durumu</label>
            <select id="status" name="status">
              <option value="" disabled selected>Kullanım Durumunu Seç</option>
              <option value="yeni">Yeni</option>
              <option value="yeni gibi">Yeni Gibi</option>
              <option value="temiz kullanılmış">Temiz Kullanılmış</option>
              <option value="kullanılmış">Kullanılmış</option>
              <option value="defolu">Defolu</option>
            </select>

            <label htmlFor="price">Fiyat</label>
            <input type="number" />

            <label htmlFor="offer">Teklif opsiyonu
              <input type="checkbox" id="offer" name="offer" />
            </label>
          </form>
        </div>
        <hr />
        <div className="product-img">
          <h2>Ürün Görseli</h2>
          <div>
            <img src="/upload-img-logo.svg" alt="set-img" />
            <p>Sürükleyip bırakarak yükle veya
              <input id="file-input" type="file" accept="image/png, image/jpeg" title="x"></input>
            </p>
            <p>PNG ve JPEG Dosya boyutu: max. 100kb</p>
          </div>
          <button>Kaydet</button>
        </div>
      </ProductWrapper>
    </>
  )
}

export default Products;