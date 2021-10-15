import axios from 'axios';

export const getProducts = async (id) => {
  await axios.get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
    .then(response => { return response.data; })
    .then(err => { console.log(err) })
}

export const getSpecificProduct = async (id) => {
  await axios.get(`http://bootcampapi.techcs.io/api/fe/v1/detail/category/${id}`)
    .then(response => { return response.data })
    .then(err => console.log(err))
}

export const addNewProduct = async () => {

}

export const deleteProduct = async () => {
  
}