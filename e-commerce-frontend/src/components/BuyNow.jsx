import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {API} from "../utils/Api"
export default function BuyNow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then(res => res.json())
      .then(allproducts => {
        const foundProduct = allproducts.find(p => p._id === id);
        setProduct(foundProduct);
      })
      .catch(err => console.error(err));
  }, [id]);
  if (!product) return <p>Product not found</p>;
  return (
    <div>
      <div>
        <img src={product.image} alt={product.name} width="150" />
      </div>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <h4>Order has been placed!</h4>
    </div>
  )
}
