// basic cart context

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, { ...item }]);
  };

  const checkInCart = (id) => {
    const existingItem = cart.find((i) => i.id === id);
    return existingItem ? true : false;
  };

  const removeFromCart = (id) => {
    const existingItem = cart.find((i) => i.id === id);
    //  remove the item from the cart
    setCart(cart.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, checkInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
