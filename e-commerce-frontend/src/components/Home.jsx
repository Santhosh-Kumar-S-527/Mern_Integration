import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <section className="bg-blue-600 text-white rounded-lg py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to MERN Ecommerce Store
        </h1>
        <p className="text-lg mb-6">
          Best deals on electronics, gadgets, accessories & more.
        </p>

        <Link
          to="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Now →
        </Link>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Shop With Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Get products delivered within 2–4 days.</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Best Quality</h3>
            <p className="text-gray-600">Top-rated items from trusted sellers.</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
            <p className="text-gray-600">Your transactions are safe & encrypted.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
