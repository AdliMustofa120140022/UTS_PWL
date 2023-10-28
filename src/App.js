// App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import ShoppingCart from './ShoppingCart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const handleBuyProduct = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct && selectedProduct.stock > 0) {
      const updatedProducts = products.map(product =>
        product.id === productId
          ? { ...product, stock: product.stock - 1 }
          : product
      );

      const existingCartItem = cart.find(item => item.id === productId);

      if (existingCartItem) {
        const updatedCart = cart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, { id: productId, ...selectedProduct, quantity: 1 }]);
      }

      setProducts(updatedProducts);
    }
  };

  const handleRemoveCartItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList
        products={products}
        onDelete={handleDeleteProduct}
        onBuy={handleBuyProduct}
      />
      <ShoppingCart cart={cart} onRemoveItem={handleRemoveCartItem} />
    </div>
  );
};

export default App;
