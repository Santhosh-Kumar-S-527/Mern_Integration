import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {API} from "../utils/Api"
export default function Products({ setCart, cart }) {
  const [products, setproducts] = useState([]);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    const res = await fetch(
      `${API}/api/deleteProduct/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      alert("Product deleted successfully");
      setproducts(products.filter(product => product._id !== id));
    } else {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then(res => res.json())
      .then(data => setproducts(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>All Products</h2>

      {products.map((p) => (
        <div key={p._id}>
          <img src={p.image} alt={p.name} width="250" />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.rating}</p>
          <p>{p.description}</p>

          <Link to={`/product/${p._id}`}>View</Link>{" "}
          <button onClick={() => addToCart(p)}>Add to Cart</button>

          {/* Optional admin action */}
          <button onClick={() => deleteProduct(p._id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}
