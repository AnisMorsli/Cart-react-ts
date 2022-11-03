import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  const nProductId = Number(productId);
  console.log(nProductId);
  console.log(typeof nProductId);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('https://dummyjson.com/products');
      const product = data.products[nProductId];
      console.log(product);
    };
    fetchProduct();
  }, []);

  return <div>product {productId}</div>;
};
