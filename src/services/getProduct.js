import React, { useState, useEffect } from 'react';

const getProduct = async () => {
  const response = await fetch("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
  console.log(response)
  const data = await response.json();
  console.log(data)
}

export default getProduct;