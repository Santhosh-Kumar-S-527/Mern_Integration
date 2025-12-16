import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/Api";

export default function Products({ setCart, cart }) {
  const [products, setproducts] = useState([]);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    const res = await fetch(`${API}/api/deleteProduct/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Product deleted successfully");
      setproducts(products.filter((product) => product._id !== id));
    } else {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        All Products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Product Image */}
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />

            {/* Product Info */}
            <h3 className="text-lg font-semibold text-gray-800">
              {p.name}
            </h3>

            <p className="text-blue-600 font-bold mt-1">
              ₹{p.price}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Rating: {p.rating} ⭐
            </p>

            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {p.description}
            </p>

            {/* Actions */}
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              <Link
                to={`/product/${p._id}`}
                className="px-4 py-2 text-sm rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                View
              </Link>

              <button
                onClick={() => addToCart(p)}
                className="px-4 py-2 text-sm rounded-md bg-green-600 text-white hover:bg-green-700 transition"
              >
                Add to Cart
              </button>

              {/* Admin Action */}
              <button
                onClick={() => deleteProduct(p._id)}
                className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
