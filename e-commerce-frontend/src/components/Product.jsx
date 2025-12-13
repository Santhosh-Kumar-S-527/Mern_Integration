import { React, useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {API} from "../utils/Api"
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {

    fetch(`${API}/api/getProduct`)
    .then(res => res.json())
    .then(allproducts => {
      const p = allproducts.find(p => p._id === id);
      setProduct(p);
    })
  });
  if (!product) return <p>Product not found</p>;
  return (
    <div>
      <div>
        <img src={product.image} alt={product.name} width="150" />
      </div>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.rating}</p>
      <p>{product.description}</p>
      <Link to = {`/buynow/${product._id}`}><button>Buy Now</button></Link>
    </div>
  )
}
