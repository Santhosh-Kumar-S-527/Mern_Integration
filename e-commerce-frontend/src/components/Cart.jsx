import React from 'react'

export default function Cart({ cart, setCart }) {
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };
  return (
    <div>
        <h2>Your Cart</h2>
        {cart.length === 0 && <p>No items in cart.</p>}
        {cart.map(item => (
            <div key = {item.id} style = {{ marginBottom: 20 }}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick = {() => removeItem(item.id)}>Remove</button>
            </div>
        ))}
  </div>
  );
}
