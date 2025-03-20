import React from "react";
import Book from "./book";

const BooksLayout = ({ title, items }) => {
  return (
    <div className="drama-container">
      <h1 className="drama-title">{title}</h1>
      <div className="books-grid">
        {items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BooksLayout;
