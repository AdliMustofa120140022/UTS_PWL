// ProductForm.js
import React, { useState } from 'react';
import './productForm.css'; // Import the CSS file

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
    <div className="product-form">
      <h2>UTS PWL - ADLI MUSTOFA (120140022)</h2>  
      <h2>Formulir Produk</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama Produk:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Harga:</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Stok:</label>
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
          />
        </div>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default ProductForm;
