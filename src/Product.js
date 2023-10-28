// Product.js
import React from 'react';

const Product = ({ product, onDelete, onBuy }) => {
  return (
    <li>
      {product.name} - Harga: ${product.price} - Stok: {product.stock}
      <button onClick={onDelete}>Hapus</button>
      <button onClick={onBuy}>Beli</button>
    </li>
  );
};

export default Product;
