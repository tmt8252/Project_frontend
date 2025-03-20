import React from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Book = ({ item }) => {
  const { addToCart, checkInCart, removeFromCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const isInCart = checkInCart(item.id);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      if (isInCart) {
        removeFromCart(item.id);
      } else {
        addToCart(item);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div key={item.id} className="book-card">
      <div className="book-image-container">
        <img src={item.image} alt={item.title} className="book-image" />
      </div>
      <div className="book-details">
        <h3 className="book-title">{item.title}</h3>
        <p className="book-author">by {item.author}</p>
        <p className="book-price">₹{item.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Book;
