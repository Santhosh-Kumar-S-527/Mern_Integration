import React from "react";

export default function Cart({ cart, setCart }) {
  const removeItem = (_id) => {
    setCart(cart.filter((item) => item._id !== _id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">
          No items in cart.
        </p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      ₹{item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item._id)}
                  className="rounded-md bg-red-500 px-4 py-1.5 text-sm text-white hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <p className="text-lg font-semibold text-gray-800">
              Total:
              <span className="text-blue-600 ml-2">
                ₹{totalPrice}
              </span>
            </p>

            <button className="rounded-md bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
