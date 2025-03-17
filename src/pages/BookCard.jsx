import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-genre">{book.genre}</p>
        <p className="book-price">₹{book.price}</p>
        <p className="book-published_date">{book.published_date}</p>
      </div>
    </div>
  );
};

export default BookCard;
