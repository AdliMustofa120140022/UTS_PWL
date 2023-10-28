// ProductList.js
import React from 'react';
import Product from './Product';
// ProductList.js
import './productList.css'; 


const ProductList = ({ products, onDelete, onBuy }) => {
  return (
    <div>
        <div className="product-list"> {ProductList}
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
