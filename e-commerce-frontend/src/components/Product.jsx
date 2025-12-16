import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../utils/Api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/getProduct`)
      .then((res) => res.json())
      .then((allproducts) => {
        const p = allproducts.find((p) => p._id === id);
        setProduct(p);
      });
  }, [id]);

  if (!product)
    return (
      <p className="text-center mt-10 text-gray-500">
        Product not found
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {product.name}
          </h2>

          <p className="text-2xl text-blue-600 font-semibold mt-2">
            ₹{product.price}
          </p>

          <p className="mt-2 text-gray-600">
            Rating: {product.rating} ⭐⭐⭐⭐⭐
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* Actions */}
          <div className="mt-6 flex gap-4">
            <Link to={`/buynow/${product._id}`}>
              <button className="px-6 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition">
                Buy Now
              </button>
            </Link>

            <Link to="/">
              <button className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                Back to Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
