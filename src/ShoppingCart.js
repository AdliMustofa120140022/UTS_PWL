// ShoppingCart.js
import React from 'react';
import './shoppingCart.css'; // Import the CSS file

const ShoppingCart = ({ cart, onRemoveItem }) => {
  return (
    <div className="shopping-cart">
      <h2>Keranjang Belanja</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - Jumlah: {item.quantity}
            <button onClick={() => onRemoveItem(item.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
