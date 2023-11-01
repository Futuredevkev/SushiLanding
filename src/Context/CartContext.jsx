import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem('cartProducts');
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartItem));
  }, [cartItem]);

  const addItemToCart = (product) => {
    const inCart = cartItem.find((productInCart) => productInCart.id === product.id);

    if (inCart) {
      setCartItems(
        cartItem.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItem, { ...product, amount: 1 }]);
    }
  };

  const deleteItemToCart = (product) => {
    const inCart = cartItem.find((productInCart) => productInCart.id === product.id);

    if (inCart && inCart.amount === 1) {
      setCartItems(cartItem.filter((productInCart) => productInCart.id !== product.id));
    } else if (inCart) {
      setCartItems(
        cartItem.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartItem, addItemToCart, deleteItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
