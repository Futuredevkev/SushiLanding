import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

   // Eliminar todo del carrito 

   const DeleteAll = () => {
    setCartItems([]);
  } 

  const deleteItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemToCart, DeleteAll }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
