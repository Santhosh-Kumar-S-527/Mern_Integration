import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../utils/Api";

export default function BuyNow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then((res) => res.json())
      .then((allproducts) => {
        const foundProduct = allproducts.find((p) => p._id === id);
        setProduct(foundProduct);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product)
    return (
      <p className="text-center mt-10 text-gray-500">
        Product not found
      </p>
    );

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-md p-6 text-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-40 w-40 object-cover rounded-lg mb-4"
        />

        {/* Product Info */}
        <h2 className="text-xl font-bold text-gray-800">
          {product.name}
        </h2>

        <p className="text-lg text-blue-600 font-semibold mt-1">
          ₹{product.price}
        </p>

        <p className="text-sm text-gray-600 mt-3">
          {product.description}
        </p>

        {/* Confirmation */}
        <div className="mt-6">
          <h4 className="text-green-600 text-lg font-semibold">
            ✔ Order has been placed successfully!
          </h4>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/">
            <button className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Continue Shopping
            </button>
          </Link>

          <Link to="/cart">
            <button className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
