// Product.js
import React from 'react';
import './product.css'; // Import the CSS file

const Product = ({ product, onDelete, onBuy }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Harga: Rp. {product.price} - Stok: {product.stock}</p>
      <button onClick={onDelete}>Hapus</button>
      <button onClick={onBuy} className="buy">Beli</button>
    </div>
  );
};

export default Product;
