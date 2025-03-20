import React, { useState } from "react";

const BookCard = ({ book }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    // Here you would add your cart logic
    // For example: addToCart(book)
    
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-genre">{book.genre}</p>
        <p className="book-price">₹{book.price}</p>
        <p className="book-published_date">{book.published_date}</p>
        <button 
          className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
          onClick={handleAddToCart}
        >
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
