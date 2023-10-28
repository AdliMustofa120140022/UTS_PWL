// ProductList.js
import React from 'react';
import Product from './Product';
import './productList.css'; // Import the CSS file

const ProductList = ({ products, onDelete, onBuy }) => {
  return (
    <div>
        <div 
            className="product-list"> 
        </div>

      <h2>Daftar Produk</h2>
      <ul>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            onDelete={() => onDelete(product.id)}
            onBuy={() => onBuy(product.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
