import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../HomePage/Header';
import { ProductWrapper } from './AddProductSC';
import Switch from 'react-switch';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [status, setStatus] = useState([]);
  const [category, setCategory] = useState([]);

  // Input States:
  const [productName, setProductName] = useState("");
  const [productImgUrl, setProductImgUrl] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [isOfferable, setIsOfferable] = useState(false);

  const [baseImage, setBaseImage] = useState("");

  let history = useHistory();
  useEffect(() => {
    localStorage.getItem("email") || history.push("/login")
  }, [history])

  useEffect(() => {
    (async () => {
      // Fetch Brands
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
      // Fetch Colors
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
      // Fetch Status
      await axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/status/all")
        .then(res => {
          setStatus(res.data);
        })
        .catch(err => {
          console.log("Hata: ", err)
        })
    })();
  }, [])

  useEffect(() => {
    (async () => {
      // Fetch Categories
      await axios.get("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
        .then(res => {
          setCategory(res.data);
        })
        .catch(err => {
          console.log("Hata: ", err)
        })
    })();
  }, [])

  // Get image url
  const handleFile = async (e) => {
    const file = e.target.files[0];
    // show image
    const base64 = await convertBase64(file);
    setBaseImage(base64);

    const file2 = new FormData();
    file2.append('file2', file)

    // console.log(file);
    // FIXME: Bu kısımda neden aldığım cevapta image url gelmiyor araştır!
    fetch('https://bootcampapi.techcs.io/api/fe/v1/file/upload/image', file, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }).then(res => {
      console.log("Res: ", res)
      if (res.ok) {
        setProductImgUrl(res.url);
        console.log("Response Image Url: ", productImgUrl);
      }
      return res.json();
    }).then(json => console.log("Json", json)).catch(err => console.log(err))
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (() => {
        resolve(fileReader.result);
      });
      fileReader.onerror = ((err) => {
        reject(err);
      });
    });
  }

  const createNewProduct = async () => {
    ;
    if (!productStatus || !productColor || !productBrand || !productCategory || productPrice <= 0) {
      alert("Ürün bilgileri boş bırakılamaz.")
    } else {
      fetch('https://bootcampapi.techcs.io/api/fe/v1/product/create', {
        method: 'POST',
        headers: {
          accept: '/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          price: productPrice,
          // imageUrl: productImgUrl,
          imageUrl: "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731014400&Signature=ZlVq%2BSp%2FK2v7XkULBaQfK5xtQVz7ekR7XdEsMkhqgwXDWlkgOjDpidp8efGPvx9AaxhHNwB3Kurp3PWIx8LfhmQhlB1RCGpbaQofsiD6OYDIIj398QQUqGKDAgB4eQ81U57gml%2FZmdrzO6mg7PElpG2vy5KyHp0QiOBU6tCGPb3PWRdMxBc82VhVxokoGi%2FVp1dQg1olkH6ZHMhvgxGCIZXbk8XYEs368UD0x7xuQQkoH2F%2FFxWkC0Da4Q0Lba0lLQRT5bidN%2FOJ1BnV1qnhB6GGUOHZnmooz9jO1vzevpyukgyDUOD6yDnfNa4TLrbt1QrSKiDUHc97yVajqZxiIw%3D%3D",
          title: productName,
          status: { title: productStatus, id: status.filter(item => item.title === productStatus)[0].id },
          color: { title: productColor, id: colors.filter(item => item.title === productColor)[0].id },
          brand: { title: productBrand, id: brands.filter(item => item.title === productBrand)[0].id },
          category: { title: productCategory, id: category.filter(item => item.title === productCategory)[0].id },
          description: productDescription,
          isOfferable: isOfferable
        }),
      }).then(res => {
        // console.log("Create New Product Res: ", res)
        if (res.ok) {
          // console.log("Add Res: ", res)
          toast.success('Yeni ürün eklendi', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setProductName("");
          setProductPrice(0);
          setProductDescription("");
          setProductCategory("");
          setProductBrand("");
          setProductColor("");
          setProductStatus("");
          setIsOfferable(false);
        }
        return res.json();
      }).then(json => {
        console.log(json)
        toast.warning(json.message[0], {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }).catch(err => console.log(err));
    }
  }

  return (
    <>
      <Header />
      <ProductWrapper id="add-container">
        <div className="product-details">
          <h2>Ürün Detayları</h2>
          <form>
            <label htmlFor="pname">Ürün Adı</label>
            <input type="text" id="pname" name="pname" maxLength="100" placeholder="Örnek: Iphone 12 Pro Max" value={productName} onChange={(e) => setProductName(e.target.value)} />

            <label htmlFor="description">Açıklama</label>
            <textarea id="description" name="description" rows="5" cols="30" maxLength="500" placeholder="Ürün açıklaması girin" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required></textarea>

            <label htmlFor="categories">Kategoriler</label>
            <select id="categories" name="categories" defaultValue={'DEFAULT'} onChange={(e) => setProductCategory(e.target.value)} required>
              <option value="DEFAULT" disabled>Kategori Seç</option>
              {
                category.map(item => (
                  <option key={item.id} value={item.title}>{item.title}</option>
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
            <input type="number" id="price" min="0" placeholder="TL" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />

            <label htmlFor="offer">Teklif Opsiyonu
              <Switch onChange={() => setIsOfferable(prevCheck => !prevCheck)} checked={isOfferable} />
            </label>
          </form>
        </div>
        <hr />
        <div className="product-img">
          <h2>Ürün Görseli</h2>
          <div className="upload-file">
            {
              !baseImage
                ?
                <>
                  <img src="/upload-img-logo.svg" alt="set-img" />
                  <p>Yüklemek istediğiniz dosyayı seçiniz.
                    <input id="product-file" type="file" accept="image/png, image/jpeg" onChange={handleFile}></input>
                  </p>
                  <p>PNG ve JPEG Dosya boyutu: max. 100kb</p>
                </>
                :
                <img className="upload-img" src={baseImage} alt="uploading-file" />
            }
          </div>
          <button onClick={createNewProduct}>Kaydet</button>
        </div>
      </ProductWrapper>
    </>
  )
}

export default AddProduct;