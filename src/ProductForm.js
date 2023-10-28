// ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      stock: productStock,
    };
    onSubmit(newProduct);
    // Reset form
    setProductName('');
    setProductPrice(0);
    setProductStock(0);
  };

  return (
    <div>
      <h2>Formulir Produk</h2>
      <form onSubmit={handleSubmit}>
        <label>Nama Produk:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>Harga:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <label>Stok:
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
          />
        </label>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default ProductForm;
